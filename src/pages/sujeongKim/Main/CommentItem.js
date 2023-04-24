import React from 'react';

const CommentItem = ({ id, userId, comment }) => {
  return (
    <li className="commentList" key={id}>
      <div>
        <span className="userIdInComment">{userId}</span>
        <span>{comment}</span>
      </div>
      <p className="postingTime">35분 전</p>
    </li>
  );
};

export default CommentItem;
