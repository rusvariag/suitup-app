import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import './ArticlesList.css';

// Import api services
import ApiService from '../../services/api-services';

const Articles = () => {
  const [articles, setArticles] = useState({});
  const api = new ApiService();

  useEffect(() => {
    const data = {};
    api.getArticles().forEach(item => {
      data[item.id] = item;
    });
    setArticles(data);
  }, []);

  const onClickHandler = articleId => {
    const article = articles[articleId];
    if (article.comments.length === 0) {
      const tmp = {};
      tmp[articleId] = api.getComments(articleId);
      setArticles(prev => ({ ...prev, ...tmp }));
    }
  };

  return (
    <div className="articles">
      <Header title="מאמרים" />
      <div className="articles-container">
        <div className="todos-container">
          <div>
            {Object.entries(articles).map(([key, article]) => {
              return (
                <Article key={key} article={article} handler={onClickHandler} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
