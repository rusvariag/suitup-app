import React, { useReducer, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import { Switch, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/ArticlesPage';
import CommentsPage from './pages/CommentsPage/CommentsPage';

// Import api services
import ApiService from './services/api-services';

export const CommentContext = React.createContext();
export const ArticlesContext = React.createContext();

const reducerComments = (state, action) => {
  switch (action.type) {
    case 'update':
      return action.value.comments || [];
    default:
      return state;
  }
};
const reducerArticles = (state, action) => {
  switch (action.type) {
    case 'update':
      return action.value;
    default:
      return state;
  }
};

function App() {
  const api = new ApiService();

  const [comments, dispatchComments] = useReducer(reducerComments, []);
  const [articles, dispatchArticles] = useReducer(reducerArticles, {});

  useEffect(() => {
    const data = {};
    api.getArticles().forEach(item => {
      data[item.id] = item;
    });
    dispatchArticles({ type: 'update', value: data });
  }, []);

  return (
    <ArticlesContext.Provider
      value={{ state: articles, dispatch: dispatchComments }}
    >
      <CommentContext.Provider
        value={{ state: comments, dispatch: dispatchComments }}
      >
        <div className="app">
          <Banner />
          <Switch>
            <Route strict exact path="/" component={ArticlePage} />
            <Route strict exact path="/comments" component={CommentsPage} />
          </Switch>
        </div>
      </CommentContext.Provider>
    </ArticlesContext.Provider>
  );
}

export default App;
