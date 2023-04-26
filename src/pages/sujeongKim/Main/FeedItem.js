import React, { useState } from 'react';
import CommentItem from './CommentItem';
import './feed.scss';

const FeedItem = props => {
  const [comment, setComment] = useState('');
  const [addComments, setAddComments] = useState([]);

  const onChangeHandler = e => {
    setComment(e.target.value);
  };

  const onClickHandler = id => {
    setAddComments([...addComments, { id, userId: USER_ID, comment }]);
  };

  const resetValue = () => {
    setComment('');
  };

  return (
    <>
      <article key={props.id}>
        <header>
          <div>
            <img src={props.profile_img} alt="프로필 사진" />
            <p>{props.user_id}</p>
          </div>
          <span className="material-symbols-outlined hiddenBtn">moreVert</span>
        </header>
        <section className="postImgArea">
          <img src={props.post_img} className="postImg" alt="게시물 이미지" />
        </section>
        <div className="postBottom">
          <div className="postReaction">
            <div>
              <span className="likeBtn material-symbols-outlined">
                favorite
              </span>
              <span className="commentBtn material-symbols-outlined">
                comment
              </span>
              <span className="shareBtn material-symbols-outlined">send</span>
            </div>
            <span className="bookmarkBtn material-symbols-outlined">
              bookmark
            </span>
          </div>
          <div className="postLike">
            <img src="/images/sujeongKim/profile_img.jpg" alt="프로필 이미지" />
            <p>
              <span>{props.liked_user_id}</span>님
              <span>외 {props.count_liked_people}명</span>이 좋아합니다
            </p>
          </div>
          <ul>
            <li className="commentList">
              <span className="userIdInComment">{props.liked_user_id}</span>
              <span className="comment">하겐다즈 먹고싶당</span>
              <p className="postingTime">35분 전</p>
            </li>
            {addComments.map(comment => {
              return (
                <CommentItem
                  id={comment.id}
                  userId={comment.userId}
                  comment={comment.comment}
                />
              );
            })}
          </ul>
        </div>
        <form
          action="#"
          onSubmit={e => {
            e.preventDefault();
          }}
          className="commentInputArea"
        >
          <input
            type="text"
            name="comment"
            className="commentInput"
            placeholder="댓글 달기..."
            onChange={e => onChangeHandler(e)}
            value={comment}
          />
          <button
            className="commentInputBtn"
            onClick={() => {
              onClickHandler();
              resetValue();
            }}
          >
            게시
          </button>
        </form>
      </article>
    </>
  );
};
export default FeedItem;

const USER_ID = 'krystal170';
