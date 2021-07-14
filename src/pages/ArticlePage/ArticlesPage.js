// imports
import React from 'react';
import { Container } from 'react-bootstrap';

// components
import ArticlesList from '../../components/ArticlesList/ArticlesList';

const ArticlesPage = () => {
  return (
    <div>
      <Container>
        <ArticlesList />
      </Container>
    </div>
  );
};

export default ArticlesPage;
