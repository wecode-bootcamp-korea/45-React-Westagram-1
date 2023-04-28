import React from 'react';

// const CommentList = ({ commentList, userId }) => {
//   return (
//     <div className="commentList">
//       {commentList.map((commentItem, index) => {
//         return (
//           <li key={index}>
//             <span className="bold">{userId}</span>
//             {commentItem}
//             <button id="댓글좋아요" class="commentHeart">
//               <img
//                 alt="좋아요 하트"
//                 class="smallHeart"
//                 src="/images/kyoungjinLee/heart.png"
//               />
//             </button>
//           </li>
//         );
//       })}
//     </div>
//   );
// };

const CommentList = ({ comment, userId }) => {
  return (
    <div className="commentList">
      <li>
        <span className="bold">{userId}</span>
        {comment}
        <button id="댓글좋아요" class="commentHeart">
          <img
            alt="좋아요 하트"
            class="smallHeart"
            src="/images/kyoungjinLee/heart.png"
          />
        </button>
      </li>
    </div>
  );
};

export default CommentList;
