// imports
import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Banner from './components/Banner/Banner';
import ArticlePage from './pages/ArticlePage/ArticlesPage';
import CommentsPage from './pages/CommentsPage/CommentsPage';

// api services
import ApiService from './services/api-services';

export const CommentContext = React.createContext();
export const ArticlesContext = React.createContext();

const reducerComments = (state, action) => {
  console.log('Reducer in work')
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

  const [comments, dispatchComments] = useReducer(reducerComments, [
    {
      id: 1,
      title: 'אני תגובה 1',
      content: 'אני תגובה 1',
      article_id: 2,
      response_to_comment_id: null,
      created_at: '2021-06-23T15:50:01.255Z',
      updated_at: '2021-06-23T16:03:55.518Z',
    },
    {
      id: 2,
      title: 'אני תגובה 2',
      content: 'אני תגובה 2',
      article_id: 2,
      response_to_comment_id: null,
      created_at: '2021-06-23T16:04:00.504Z',
      updated_at: '2021-06-23T16:04:00.504Z',
    },
    {
      id: 3,
      title: 'אני תגובה 3',
      content: 'אני תגובה 3',
      article_id: 2,
      response_to_comment_id: null,
      created_at: '2021-06-23T16:04:23.533Z',
      updated_at: '2021-06-23T16:04:23.533Z',
    },
    {
      id: 4,
      title: 'אני תגובה 4',
      content: 'אני תגובה 4',
      article_id: 2,
      response_to_comment_id: null,
      created_at: '2021-06-23T16:04:27.286Z',
      updated_at: '2021-06-23T16:04:27.286Z',
    },
    {
      id: 5,
      title: 'אני תגובה 5',
      content: 'אני תגובה 5',
      article_id: 2,
      response_to_comment_id: 4,
      created_at: '2021-06-23T16:04:30.792Z',
      updated_at: '2021-06-23T16:05:08.389Z',
    },
    {
      id: 6,
      title: 'אני תגובה 6',
      content: 'אני תגובה 6',
      article_id: 2,
      response_to_comment_id: 2,
      created_at: '2021-06-23T16:04:34.688Z',
      updated_at: '2021-06-23T16:04:53.883Z',
    },
    {
      id: 7,
      title: 'אני תגובה 7',
      content: 'אני תגובה 7',
      article_id: 2,
      response_to_comment_id: 6,
      created_at: '2021-06-23T16:04:38.898Z',
      updated_at: '2021-06-23T16:04:58.626Z',
    },
    {
      id: 8,
      title: 'אני תגובה 8',
      content: 'אני תגובה 8',
      article_id: 2,
      response_to_comment_id: 2,
      created_at: '2021-06-23T16:04:42.543Z',
      updated_at: '2021-06-23T16:05:05.270Z',
    },
  ]);
  const [articles, dispatchArticles] = useReducer(reducerArticles, {});

  useEffect(() => {
    const data = {};
    api
      .getArticles()
      .then(res => res.json())
      .then(data => {
        const tmp = {};
        data.forEach(item => {
          tmp[item.id] = item;
        });
        console.log(tmp);
        dispatchArticles({ type: 'update', value: tmp });
      });
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
