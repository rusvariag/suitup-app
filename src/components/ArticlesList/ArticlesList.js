import React, { useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import { useHistory } from 'react-router-dom';
import './ArticlesList.css';
import { CommentContext, ArticlesContext } from '../../App';

// Import api services
import ApiService from '../../services/api-services';

const Articles = () => {
  const { dispatch: commentsDispath } = useContext(CommentContext);
  const { state: articles, dispatch } = useContext(ArticlesContext);

  const history = useHistory();
  const api = new ApiService();

  const onClickHandler = articleId => {
    const article = articles[articleId];
    if (article.comments.length === 0) {
      api
        .getComments(articleId)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: 'update', value: data });
        });
    }
    commentsDispath({ type: 'update', value: article.comments });
    history.push('/comments');
  };

  return (
    <div className="articles">
      <Header title="מאמרים" />
      <div className="articles-container">
        <div>
          {Object.entries(articles).map(([key, article]) => (
            <Article key={key} article={article} handler={onClickHandler} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
