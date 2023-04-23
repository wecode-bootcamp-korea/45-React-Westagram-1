import React, { useState } from 'react';
import './Main.scss';
import CommentItem from './CommentItem';

const MainSujeong = () => {
  const [id, setId] = useState(1);
  const [comment, setComment] = useState('');
  const USER_ID = 'krystal170';
  const [addComments, setAddComments] = useState([]);

  const onChangeHandler = e => {
    setComment(e.target.value);
    console.log('onChangeHandler', comment);
  };

  const onClickHandler = () => {
    setAddComments([...addComments, { id, userId: USER_ID, comment }]);
    setId(id => ++id);
    console.log('onClickHandler', addComments);
  };
  const resetValue = () => {
    console.log('resetValue', comment);
    setComment('');
  };
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="logoGroup">
          <img
            src="/images/sujeongKim/001-instagram.png"
            alt="westagram 로고 이미지"
          />
          <h1 className="logo">westagram</h1>
        </div>
        <input
          type="text"
          className="search"
          name="search"
          placeholder="검색"
        />
        <div className="navRight">
          <div className="exploreIcon"> </div>
          <div className="heartIcon"></div>
          <div className="profileIcon"></div>
        </div>
      </nav>
      <main className="mainMain">
        <div className="feeds">
          <article>
            <header>
              <div>
                <img
                  src="/images/sujeongKim/profile_img.jpg"
                  alt="프로필 사진"
                />
                <p>{USER_ID}</p>
              </div>
              <span className="material-symbols-outlined hiddenBtn">
                moreVert
              </span>
            </header>
            <section className="postImgArea">
              <img
                src="/images/sujeongKim/profile_img.jpg"
                className="postImg"
                alt="게시물 이미지"
              />
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
                  <span className="shareBtn material-symbols-outlined">
                    send
                  </span>
                </div>
                <span className="bookmarkBtn material-symbols-outlined">
                  bookmark
                </span>
              </div>
              <div className="postLike">
                <img
                  src="/images/sujeongKim/profile_img.jpg"
                  alt="프로필 이미지"
                />
                <p>
                  <span>{USER_ID}</span>님 <span>외 10명</span>이 좋아합니다
                </p>
              </div>
              <ul>
                <li className="commentList">
                  <span className="userIdInComment">{USER_ID}</span>
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
        </div>
        <div className="mainRight">
          <div className="userInfo">
            <img src="/images/sujeongKim/profile_img.jpg" alt="프로필 사진" />
            <div className="userInfoTxt">
              <p>reveur1920</p>
              <p>mara shanggua</p>
            </div>
          </div>
          <div className="storyListArea">
            <div className="storyListTop">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="storyList">
              <li>
                <div className="storyProfileImgBorder">
                  <img
                    src="/images/sujeongKim/profile_img.jpg"
                    alt="프로필 사진"
                  />
                </div>
                <div className="storyUserInfo">
                  <p>icecream486</p>
                  <p>25분 전</p>
                </div>
              </li>
              <li>
                <div className="storyProfileImgBorder">
                  <img
                    src="/images/sujeongKim/profile_img.jpg"
                    alt="프로필 사진"
                  />
                </div>
                <div className="storyUserInfo">
                  <p>chocochoco123</p>
                  <p>45분 전</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommendListArea">
            <div className="recommendListTop">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recommendList">
              <li>
                <div className="recommendInfoArea">
                  <img
                    src="/images/sujeongKim/profile_img.jpg"
                    alt="프로필 사진"
                  />
                  <div className="recommendUserInfo">
                    <p>sushi987</p>
                    <p>icecream123님 외 10명이 팔로우하고 있습니다</p>
                  </div>
                </div>
                <p>팔로우</p>
              </li>
            </ul>
          </div>
          <footer className="mainFooter">
            <ul className="footerTop">
              <li>소개</li>
              <li>도움말</li>
              <li>홍보 센터</li>
              <li>API</li>
              <li>채용 정보</li>
              <li>개인정보처리방침약관</li>
              <li>위치</li>
              <li>언어</li>
              <li>Meta Verified</li>
            </ul>
            <p>© 2023 INSTAGRAM FROM META</p>
          </footer>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainSujeong;
