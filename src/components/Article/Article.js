import React from 'react';
import './Article.css';

const Article = ({ article, handler }) => {
  const { title, content, id } = article;
  return (
    <div className="article" onClick={() => handler(id)}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Article;
