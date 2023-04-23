import React from 'react';

const CommentItem = props => {
  console.log(props);
  return (
    <li className="commentList" key={props.id}>
      <div>
        <span className="userIdInComment">{props.userId}</span>
        <span>{props.comment}</span>
      </div>
      <p className="postingTime">35분 전</p>
    </li>
  );
};

export default CommentItem;
