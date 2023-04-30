import React, { useState } from 'react';
import CommentItem from './CommentItem';
import './feed.scss';

const FeedItem = props => {
  const { profile_img, user_id, post_img, liked_user_id, count_liked_people } =
    props.item;
  const [comment, setComment] = useState('');
  const [addComments, setAddComments] = useState([]);
  const [id, setId] = useState(0);

  const onChangeHandler = e => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    setAddComments([...addComments, { id, userId: USER_ID, comment }]);
    setId(id + 1);
  };

  const resetValue = () => {
    setComment('');
  };
  const onLike = () => {
    console.log('like!');
  };
  const onRemove = deleteComment => {
    const newCommentList = addComments.filter(
      comment => comment.id !== deleteComment
    );
    setAddComments(newCommentList);
  };

  return (
    <article>
      <header>
        <div>
          <img src={profile_img} alt="프로필 사진" />
          <p>{user_id}</p>
        </div>
        <span className="material-symbols-outlined hiddenBtn">More_vert</span>
      </header>
      <section className="postImgArea">
        <img src={post_img} className="postImg" alt="게시물 이미지" />
      </section>
      <div className="postBottom">
        <div className="postReaction">
          <div className="reactionLeft">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              className="favorite"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              className="commentBtn"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              className="shareBtn"
            />
          </div>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            className=" bookmarkBtn"
          />
        </div>
        <div className="postLike">
          <img src="/images/sujeongKim/profile_img.jpg" alt="프로필 이미지" />
          <p>
            <span>{liked_user_id}</span>님<span>외 {count_liked_people}명</span>
            이 좋아합니다
          </p>
        </div>
        <ul>
          {addComments.map(comment => {
            return (
              <CommentItem
                id={comment.id}
                userId={comment.userId}
                comment={comment.comment}
                onRemove={onRemove}
                onLike={onLike}
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
  );
};
export default FeedItem;

const USER_ID = 'krystal170';
