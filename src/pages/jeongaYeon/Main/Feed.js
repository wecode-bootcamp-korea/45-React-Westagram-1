import React, { useState } from 'react';
import Comment from './Comment';

const Feed = ({ feed }) => {
  const [value, setValue] = useState('');
  const [comments, setComments] = useState([]);

  const handleComment = event => {
    const comment = event.target.value;
    if (comment.length <= 0) return;
    setValue(comment);
    if (event.keyCode === 13) {
      setComments(current => [...current, comment]);
      setValue('');
    }
  };

  const handleCommentBtn = () => {
    if (value.length <= 0) return;
    setComments(current => [...current, value]);
    setValue('');
  };

  const handleCommentInput = event => {
    setValue(event.target.value);
  };

  return (
    <article className="feed">
      <div className="feedsHeader">
        <div className="feedsHeaderProfile">
          <img alt="프로필 사진" className="profileImage" src={feed.userImg} />
          <span className="profileId">{feed.userId}</span>
        </div>
        <i className="fas fa-ellipsis-h" />
      </div>
      <img alt="피드 이미지" className="feedImage" src={feed.feedImg} />
      <div className="feedIcons">
        <div className="feedIconsLeft">
          <i className="fas fa-heart" />
          <i className="far fa-comment fa-flip-horizontal" />
          <img
            alt="업로드 이미지"
            src="https://icon-library.com/images/upload-icon-png/upload-icon-png-16.jpg"
            width="25"
            height="25"
          />
        </div>
        <i className="far fa-bookmark" />
      </div>
      <div className="feedHeart">
        <img
          className="feedHeartImg"
          alt="프로필 이미지"
          width="20"
          height="20"
          src={feed.heartImg}
        />
        <div className="feedHeartUsers">
          <span>{feed.heartUser}</span>님 <span>외 {feed.heartUsers}명</span>이
          좋아합니다
        </div>
      </div>
      <p className="feedContent">
        <span>{feed.userId}</span> {feed.feedContent}...
        <span>더 보기</span>
      </p>
      <div className="feedComments">
        {feed.comment.map(item => (
          <div key={item.id} className="feedComment">
            <p>
              <span className="commentId">{item.commentUser}</span>
              <span className="commentContent">{item.commentContent}</span>
            </p>
            <div className="commentIconWrapper">
              <i className="far fa-heart heart false" />
            </div>
          </div>
        ))}
        {comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
      <p className="feedTime">42분 전</p>
      <div className="writeComment">
        <input
          onKeyUp={handleComment}
          className="writeCommentInput"
          placeholder="댓글 달기..."
          value={value}
          onChange={handleCommentInput}
        />
        <span
          onClick={handleCommentBtn}
          className={`writeComBtn ${
            value
              ? value.length > 0
                ? 'writeCommentBtn'
                : 'noWriteCommntBtn'
              : 'noValue'
          }`}
        >
          게시
        </span>
      </div>
    </article>
  );
};

export default Feed;
