// imports
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

// components
import CommentsList from '../../components/CommentsList/CommentsList';

// state managment
import { CommentContext } from '../../App';

const CommentsPage = () => {
  const context = useContext(CommentContext);
  return (
    <div>
      <Container>
        <CommentsList comments={context.state} />
      </Container>
    </div>
  );
};

export default CommentsPage;
