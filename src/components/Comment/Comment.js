import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div>
        {new Date(comment.created_at).toLocaleString()}{' '}
        <span>(עודכן: {new Date(comment.created_at).toLocaleString()})</span>
      </div>
      <h5>{comment.title}</h5>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
