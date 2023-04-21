import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <div className="feedComment">
      <p>
        <span className="commentId">happy_ja</span>
        <span className="commentContent">{props.comment}</span>
      </p>
      <div className="commentIconWrapper">
        <i className="far fa-heart heart false" />
      </div>
    </div>
  );
};

export default Comment;
