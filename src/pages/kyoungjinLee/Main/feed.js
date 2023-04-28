import { useState } from 'react';
import CommentList from './Commentlist';

//왼쪽 피드 프로필 ~
function Feed({ content }) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const userId = 'wak_good';

  const getComment = event => {
    setComment(event.target.value);
  };

  const addComment = () => {
    if (comment.length <= 0) return;
    setCommentList([...commentList, comment]);
    setComment('');
  };

  const enterUp = event => {
    const newComment = event.target.value;

    if (newComment.length <= 0) return;
    if (event.keyCode === 13) {
      setCommentList([...commentList, newComment]);
      setComment('');
    }
  };

  return (
    <div class="meFid" key={content.id}>
      {/*왼쪽 프로필*/}
      <div class="meProfile">
        <img
          class="profileImage"
          alt="내 프로필 이미지"
          src={`${content.profileImg}.jpg`}
        />
        <div class="meId">
          <span class="meName">{content.profileName}</span>
          <span class="meDesc">{content.profileIntroduce}</span>
        </div>
        <div class="dots" />
      </div>
      {/*피드 콘텐츠*/}
      <img alt="인서타 피드 이미지" src={`${content.feedImg}.jpg`} />
      {/*피드 아래 아이콘들*/}
      <div class="bottomIcon">
        <button class="iconButton">
          <img
            alt="하트 아이콘"
            class="icons like"
            src="/images/kyoungjinLee/heart.png"
          />
        </button>
        <img
          alt="댓글 아이콘"
          class="icons comment"
          src="/images/kyoungjinLee/comments-2.png"
        />
        <img
          class="icons upload"
          alt="업로드 아이콘"
          src="/images/kyoungjinLee/upload.png"
        />
        <img
          alt="스크랩 아이콘"
          class="icons scrap"
          src="/images/kyoungjinLee/스크랩.png"
        />
      </div>
      {/*~가 좋아합니다*/}
      <div class="likey">
        <img
          class="likeyimage"
          alt="내 프로필 이미지"
          src={`${content.profileImg}.jpg`}
        />
        <span class="likeComment">
          <span class="bold">{content.profileName}</span>님
          <span class="bold"> 외 {content.likeNum}</span>이 좋아합니다
        </span>
      </div>
      {/*댓글 들어갈 공간*/}
      <div class="feedComment">
        <span class="bold">{content.profileName}</span>
        {content.feedContent}
        <div class="comment1">
          <span class="bold">{content.commentId}</span>
          {content.fixedComment}
          <button id="댓글좋아요" class="commentHeart">
            <img
              alt="좋아요 하트"
              class="smallHeart"
              src="/images/kyoungjinLee/heart.png"
            />
          </button>
          {commentList.map((comment, index) => {
            return (
              <CommentList
                // id={comment.id}
                comment={comment}
                userId={userId}
                key={index}
              />
            );
          })}
        </div>
        <div class="time">55분전</div>
      </div>
      {/* 댓글 쓰는 공간 */}
      <div className="getComment">
        <input
          id="댓글창"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={getComment}
          onKeyUp={enterUp}
        />
        <button id="게시" onClick={addComment}>
          게시
        </button>
      </div>
    </div>
  );
}

// //댓글 쓰는 공간
// function CommentBox({ comment, getComment, addComment }) {
//   return (
//     <div class="getComment">
//       <input
//         id="댓글창"
//         type="text"
//         placeholder="댓글 달기..."
//         value={comment}
//         onChange={getComment}
//       />
//       <button id="게시" onClick={addComment}>
//         게시
//       </button>
//     </div>
//   );
// }

export default Feed;
