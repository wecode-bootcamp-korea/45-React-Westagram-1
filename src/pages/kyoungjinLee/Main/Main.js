import { useState } from 'react';
import './Main.scss';
import '../../../styles/common.scss';

//위스타 배너
function Nav() {
  return (
    <nav className="navigation">
      <div class="insta">
        <i class="fa-brands fa-instagram fa-xl" />
        <span>Westagram</span>
      </div>
      <div class="search">
        <input class="searching" type="text" placeholder="검색" />
        <i class="fa-solid fa-magnifying-glass fa-xs" />
      </div>
      <div class="icons">
        <i class="fa-regular fa-compass fa-xl" />
        <i class="fa-regular fa-heart fa-xl" />
        <i class="fa-regular fa-user fa-xl" />
      </div>
    </nav>
  );
}

//위스타 왼쪽

//왼쪽 피드 프로필 ~
function Feed() {
  return (
    <>
      {/*왼쪽 프로필*/}
      <div class="meProfile">
        <img
          class="profileImage"
          alt="내 프로필 이미지"
          src="/images/kyoungjinLee/나.jpg"
        />
        <div class="meId">
          <span class="meName">al_zar_takkarsen</span>
          <span class="meDesc">🫠</span>
        </div>
        <div class="dots" />
      </div>
      {/*피드 콘텐츠*/}
      <img alt="인서타 피드 이미지" src="/images/kyoungjinLee/싸콘.jpg" />
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
          src="/images/kyoungjinLee/나.jpg"
        />
        <span class="likeComment">
          <span class="bold">al_zar_takkarsen</span>님
          <span class="bold">외 10명</span>이 좋아합니다
        </span>
      </div>
      {/*댓글 들어갈 공간*/}
      <div class="feedComment">
        <span class="bold">al_zar_takkarsen</span> 우 나 핫걸 좋은 거 보고 갈래?
        💦
        <div class="comment1">
          <span class="bold">_sentiers</span> 라인이 예술이네요
          <button id="댓글좋아요" class="commentHeart">
            <img
              alt="좋아요 하트"
              class="smallHeart"
              src="/images/kyoungjinLee/heart.png"
            />
          </button>
          <div>{}</div>
        </div>
        <div class="time">55분전</div>
      </div>
    </>
  );
}

//댓글 쓰는 공간
function CommentBox({ comment, getComment, addComment }) {
  return (
    <div class="getComment">
      <input
        id="댓글창"
        type="text"
        placeholder="댓글 달기..."
        value={comment}
        onChange={getComment}
      />
      <button id="게시" onClick={addComment}>
        게시
      </button>
    </div>
  );
}

//위스타 오른쪽
//위스타 오른쪽 내 프로필
function RightProfile() {
  return (
    <div class="rightMe">
      <img alt="내 프로필 이미지" src="/images/kyoungjinLee/나.jpg" />
      <span class="meName">al_zar_takkarsen</span>
      <span class="meDesc2">🫠</span>
    </div>
  );
}

//스토리 박스 위쪽 글씨
function StoryTop() {
  return (
    <div class="story-top">
      <span class="rightTop">스토리</span>
      <button class="seeAll">모두 보기</button>
    </div>
  );
}

//스토리 박스 내 사람들
function StoryPeople() {
  return (
    <div class="storyPeople">
      <ul>
        <li id="story1">
          <img
            alt="째롱이 프로필 이미지"
            src="/images/kyoungjinLee/째로이.jpg"
          />
          <span class="profile">jrong._</span>
          <span class="storyTime">10분 전</span>
        </li>
        <li id="story2">
          <img alt="윤지 프로필 이미지" src="/images/kyoungjinLee/윤디.jpg" />
          <span class="profile">yuuunx</span>
          <span class="storyTime">2시간 전</span>
        </li>
        <li id="story3">
          <img
            alt="노찌롱 프로필 이미지"
            src="/images/kyoungjinLee/노홍철.jpg"
          />
          <span class="profile">rohongchul</span>
          <span class="storyTime">11시간 전</span>
        </li>
        <li id="story4">
          <img alt="예디 프로필 이미지" src="/images/kyoungjinLee/조지.jpg" />
          <span class="profile">jeo.ji_</span>
          <span class="storyTime">23시간 전</span>
        </li>
      </ul>
    </div>
  );
}

//추천 피드 위쪽 글씨
function RecommendTop() {
  return (
    <div class="recommendTop">
      <span class="rightTop">회원님을 위한 추천</span>
      <button class="seeAll">모두 보기</button>
    </div>
  );
}

//추천 피드 사람들
function RecommendList() {
  return (
    <div class="recommendList">
      <ul>
        <li id="recommend1">
          <img
            alt="위코드 프로필 이미지"
            src="/images/kyoungjinLee/wecode.jpg"
          />
          <span class="profile">wecode_bootcamp</span>
          <span class="recommendFollow">_legend_a님 외 2명이...</span>
          <button class="follow">팔로우</button>
        </li>
        <li id="recommend2">
          <img alt="하품 프로필 이미지" src="/images/kyoungjinLee/하품.jpg" />
          <span class="profile">hapoom_film</span>
          <span class="recommendFollow">seol_seol_92님 외 3명...</span>
          <button class="follow">팔로우</button>
        </li>
        <li id="recommend3">
          <img
            alt="여행 프로필 이미지"
            src="/images/kyoungjinLee/여행을 떠나요.jpg"
          />
          <span class="profile">pirt._.trip</span>
          <span class="recommendFollow">jimmylee1220님 외 1...</span>
          <button class="follow">팔로우</button>
        </li>
      </ul>
    </div>
  );
}

//Footer
function Footer() {
  return (
    <div class="footer">
      <p>Instagram 정보 . 지원 . 홍보 센터 . API . </p>
      <p>채용 정보 . 개인정보처리방침 . 약관 . </p>
      <p> 디렉터리 . 프로필 . 해시태그 . 언어</p>
      <p>&copy; 2023 INSTAGRAM</p>
    </div>
  );
}

const MainKyoungjin = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const userId = 'wakgood';

  const getComment = event => {
    setComment(event.target.value);
  };

  const addComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');
  };

  return (
    <>
      <Nav />
      <main>
        <div class="feeds">
          <article>
            <div class="meFid">
              <div class="meProfile">
                <img
                  class="profileImage"
                  alt="내 프로필 이미지"
                  src="/images/kyoungjinLee/나.jpg"
                />
                <div class="meId">
                  <span class="meName">al_zar_takkarsen</span>
                  <span class="meDesc">🫠</span>
                </div>
                <div class="dots" />
              </div>
              {/*피드 콘텐츠*/}
              <img
                alt="인서타 피드 이미지"
                src="/images/kyoungjinLee/싸콘.jpg"
              />
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
                  src="/images/kyoungjinLee/나.jpg"
                />
                <span class="likeComment">
                  <span class="bold">al_zar_takkarsen</span>님
                  <span class="bold">외 10명</span>이 좋아합니다
                </span>
              </div>
              {/*댓글 들어갈 공간*/}
              <div class="feedComment">
                <span class="bold">al_zar_takkarsen</span> 우 나 핫걸 좋은 거
                보고 갈래? 💦
                <div class="comment1">
                  <span class="bold">_sentiers</span> 라인이 예술이네요
                  <button id="댓글좋아요" class="commentHeart">
                    <img
                      alt="좋아요 하트"
                      class="smallHeart"
                      src="/images/kyoungjinLee/heart.png"
                    />
                  </button>
                  <div className="commentList">
                    {commentList.map(commentItem => {
                      return (
                        <li>
                          <span className="bold">{userId}</span>
                          {commentItem}
                          <img
                            alt="좋아요 하트"
                            class="smallHeart"
                            src="/images/kyoungjinLee/heart.png"
                          />
                        </li>
                      );
                    })}
                  </div>
                </div>
                <div class="time">55분전</div>
              </div>
              <div class="getComment">
                <input
                  id="댓글창"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={getComment}
                />
                <button id="게시" onClick={addComment}>
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        <div class="mainRight">
          <RightProfile />
          <div class="storyFeed">
            <StoryTop />
            <StoryPeople />
          </div>

          <div class="recommendFeed">
            <RecommendTop />
            <RecommendList />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainKyoungjin;
