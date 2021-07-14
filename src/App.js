import Banner from './components/Banner/Banner';
import { Switch, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/ArticlesPage';
import CommentsPage from './pages/CommentsPage/CommentsPage';

function App() {
  return (
    <div className="app">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={ArticlePage} />
        <Route strict exact path="/comments" component={CommentsPage} />
      </Switch>
    </div>
  );
}

export default App;
