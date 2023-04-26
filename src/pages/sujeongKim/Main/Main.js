import React, { useEffect, useState } from 'react';
import './Main.scss';
import FeedItem from './FeedItem';

const MainSujeong = () => {
  const [feedItem, setFeedItem] = useState([]);

  useEffect(() => {
    fetch('/data/feed_data.json')
      .then(res => res.json())
      .then(data => {
        setFeedItem(data);
      });
  }, []);

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
          {feedItem.map(item => {
            return (
              <FeedItem
                key={item.id}
                profile_img={item.profile_img}
                user_id={item.user_id}
                post_img={item.post_img}
                liked_user_id={item.liked_user_id}
                count_liked_people={item.count_liked_people}
                reply={item.reply}
              />
            );
          })}
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
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainSujeong;
