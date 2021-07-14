import React from 'react';
import { Container } from 'react-bootstrap';
import Comments from '../../components/Comments/Comments';

const CommentsPage = () => {
  return (
    <div>
      <Container>
        <Comments />
      </Container>
    </div>
  );
};

export default CommentsPage;
