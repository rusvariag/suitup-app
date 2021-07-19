// imports
import React from 'react';

// components
import Comment from '../Comment/Comment';

// styles
import './Comments.css';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.value.id} className={comment.el === 'root' ? 'root-comment' : 'child-comment'}>
          <Comment comment={comment.value} />
          {comment.children && <Comments comments={comment.children} />}
        </div>
      ))}
    </div>
  );
};

export default Comments;
