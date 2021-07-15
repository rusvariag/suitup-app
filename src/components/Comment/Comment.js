// imports
import React from 'react';

// styles
import './Comment.css';

const Comment = ({ comment }) => {
  const Responce = data => {
    return <div>{data}</div>;
  };

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
      {comment.response_to_comment ? (
        <>
          <div className="responce-container">
            <h6 className="responce-title">
              כתב: {comment.response_to_comment.title}
            </h6>
            {comment.response_to_comment.title}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comment;
