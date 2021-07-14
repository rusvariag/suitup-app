import React from 'react';
import './CommentsList.css';
import Header from '../Header/Header';
import ModalComponent from '../Modal/Modal';
import Comment from '../Comment/Comment';

const Comments = ({ comments }) => {
  const arrIds = comments.map(comment => comment.id);
  return (
    <div className="comments">
      <div className="flex-container">
        <ModalComponent ids={arrIds} />
        <Header title="תגובות" />
      </div>
      <div className="comments-container">
        <div>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Comments;
