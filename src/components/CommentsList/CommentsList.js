import React from 'react';
import './CommentsList.css';
import Header from '../Header/Header';

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <Header title="תגובות" />
      <div className="comments-container">
        <div>
          {comments.map(comment => (
            <div>{comment.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
