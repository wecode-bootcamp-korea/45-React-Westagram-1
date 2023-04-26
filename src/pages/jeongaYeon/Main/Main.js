import React, { useEffect, useState } from 'react';
import { FOOTER_LIST } from './footerList';
import './Main.scss';
import './Comment.scss';
import Comment from './Comment';

const MainJeonga = () => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState('');
  const [feeds, setFeeds] = useState([]);

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
    if (value <= 0) return;
    setComments(current => [...current, value]);
    setValue('');
  };

  const handleCommentInput = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch('data/feed.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => setFeeds(data.list));
  }, []);

  return (
    <div className="main">
      <div className="wrapper">
        <nav className="navWrapper">
          <div className="navLogo">
            <i className="fab fa-instagram navLogoIcon" />
            <div className="navLogoCenter" />
            <h1 className="navLogoTitle">Westagram</h1>
          </div>
          <div className="navSearch">
            <input type="text" placeholder="검색" className="navSearchInput" />
            <i className="fas fa-search navSearchIcon" />
          </div>
          <div className="navInfo">
            <img
              className="navInfoImg"
              alt="탐색 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="navInfoImg"
              alt="좋아요 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="navInfoImg"
              alt="사람 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
        <main className="mainWrapper">
          <section className="feeds">
            {feeds?.map(feed => (
              <article className="feedsWrapper" key={feed.id}>
                <div className="feedsHeader">
                  <div className="feedsHeaderProfile">
                    <img
                      alt="프로필 사진"
                      className="profileImage"
                      src={feed.userImg}
                    />
                    <span className="profileId">{feed.userId}</span>
                  </div>
                  <i className="fas fa-ellipsis-h" />
                </div>
                <img
                  alt="피드 이미지"
                  className="feedImage"
                  src={feed.feedImg}
                />
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
                    <span>{feed.heartUser}</span>님{' '}
                    <span>외 {feed.heartUsers}명</span>이 좋아합니다
                  </div>
                </div>
                <p className="feedContent">
                  <span>{feed.userId}</span> {feed.feedContent}...
                  <span>더 보기</span>
                </p>
                <div className="feedComments">
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
            ))}
          </section>
          <aside className="mainRight">
            <div className="userProfile">
              <div className="userProfileImg">
                <img
                  className="userImg"
                  alt="프로필 이미지"
                  src="https://avatars.githubusercontent.com/u/52394741?s=200&v=4"
                />
              </div>
              <div className="userProfileInfo">
                <span className="userId">wecode_bootcamp</span>
                <span className="userName">WeCode | 위코드</span>
              </div>
            </div>
            <div className="story">
              <div className="header">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="storyUsers">
                <img
                  className="storyUsersImage"
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="storyUsersInfo">
                  <span>_yum_s</span>
                  <span>16분 전 </span>
                </div>
              </div>
              <div className="storyUsers">
                <img
                  className="storyUsersImage"
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="storyUsersInfo">
                  <span>drink_drink</span>
                  <span>3시간 전 </span>
                </div>
              </div>
              <div className="storyUsers">
                <img
                  className="storyUsersImage"
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1510337550647-e84f83e341ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                />
                <div className="storyUsersInfo">
                  <span>quckyc</span>
                  <span>20시간 전 </span>
                </div>
              </div>
            </div>
            <div className="recommendation">
              <div className="header">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="recommendationUsers">
                <img
                  className="recommendUsersImg"
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1680009178685-34784413ffe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="recommendUsersInfo">
                  <span>joaaaahye</span>
                  <span>_legnd님 외 2명이 ...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendationUsers">
                <img
                  className="recommendUsersImg"
                  alt="프로필 이미지"
                  src="https://plus.unsplash.com/premium_photo-1679822641085-b40f412dcd7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="recommendUsersInfo">
                  <span>rampart80</span>
                  <span>ring.in.seoul님 외 12...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendationUsers">
                <img
                  className="recommendUsersImg"
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
                />
                <div className="recommendUsersInfo">
                  <span>shawnjjoo</span>
                  <span>jimmy1004님 외 1...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="footer">
              <ul>
                {FOOTER_LIST.map(item => (
                  <li key={item.id}>
                    {item.title}
                    {FOOTER_LIST.indexOf(item) !== FOOTER_LIST.length - 1
                      ? ' ·'
                      : ''}
                  </li>
                ))}
              </ul>
              <span>© 2023 WESTAGRAM</span>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MainJeonga;
