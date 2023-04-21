import React from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  return (
    <div className="feedComment">
      <p>
        <span className="commentId">happy_ja</span>
        <span className="commentContent">{comment}</span>
      </p>
      <div className="commentIconWrapper">
        <i className="far fa-heart heart false" />
      </div>
    </div>
  );
};

export default Comment;
