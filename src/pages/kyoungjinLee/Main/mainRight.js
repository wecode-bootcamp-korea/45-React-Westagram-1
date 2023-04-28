import { Footer } from './footer';

//오른쪽 피드
function MainRight({ footer }) {
  return (
    <>
      <div class="rightMe">
        <img alt="내 프로필 이미지" src="/images/kyoungjinLee/나.jpg" />
        <span class="meName">al_zar_takkarsen</span>
        <span class="meDesc2">🫠</span>
      </div>
      <div class="storyFeed">
        <div class="story-top">
          <span class="rightTop">스토리</span>
          <button class="seeAll">모두 보기</button>
        </div>

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
              <img
                alt="윤지 프로필 이미지"
                src="/images/kyoungjinLee/윤디.jpg"
              />
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
              <img
                alt="예디 프로필 이미지"
                src="/images/kyoungjinLee/조지.jpg"
              />
              <span class="profile">jeo.ji_</span>
              <span class="storyTime">23시간 전</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="recommendFeed">
        <div class="recommendTop">
          <span class="rightTop">회원님을 위한 추천</span>
          <button class="seeAll">모두 보기</button>
        </div>
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
              <img
                alt="하품 프로필 이미지"
                src="/images/kyoungjinLee/하품.jpg"
              />
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
      </div>
      <div className="footer">
        {Footer.map(foot => {
          return <p key={foot.id}>{foot.footerInfo}</p>;
        })}
        <p>&copy; 2023 INSTAGRAM</p>
      </div>
    </>
  );
}

export default MainRight;
