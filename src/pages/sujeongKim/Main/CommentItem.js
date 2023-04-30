import React from 'react';

const CommentItem = ({ id, userId, comment, onRemove, onLike }) => {
  return (
    <li className="commentList" key={id}>
      <div className="commentListRight">
        <span className="userIdInComment">{userId}</span>
        <span>{comment}</span>
        <p className="postingTime">35분 전</p>
      </div>
      <div className="commentListLeft">
        <button className="likeComment" />
        <button onClick={() => onRemove(id)}>
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
