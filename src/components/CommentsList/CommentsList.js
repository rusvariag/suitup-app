// imports
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// components
import Header from '../Header/Header';
import ModalComponent from '../Modal/Modal';
import Comment from '../Comment/Comment';

// styles
import './CommentsList.css';

const Comments = ({ comments }) => {
  const arrIds = comments.map(comment => comment.id);
  const history = useHistory();

  comments.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

  comments.forEach(comment => {
    const resp = comment.response_to_comment_id;
    if (resp) {
      const respComment = comments.find(el => el.id === resp);
      comment.response_to_comment = respComment;
    }
  });

  const handlerBackToArticles = () => {
    history.push('/');
  };

  return (
    <div className="comments">
      <div className="flex-container">
        <Link to={Math.max(...arrIds).toString()}>
          <Button variant="dark">תגובה אחרונה</Button>
        </Link>
        <ModalComponent ids={arrIds} />
        <Button variant="secondary" onClick={handlerBackToArticles}>
          חזרה למאמרים
        </Button>
        <Header title="תגובות" />
      </div>
      <div className="comments-container">
        <div>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <Link to={Math.min(...arrIds).toString()}>
        <Button variant="dark">תגובה ראשונה</Button>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Comments;
