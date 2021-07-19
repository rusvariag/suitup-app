// imports
import React from 'react';

// styles
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment" id={comment.id}>
      <div className="comment-header">
        {new Date(comment.created_at).toLocaleString()}{' '}
        <span>
          (עודכן פעם אחרונה: {new Date(comment.created_at).toLocaleString()})
        </span>
      </div>
      <h5>{comment.title}</h5>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;