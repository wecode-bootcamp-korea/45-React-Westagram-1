import React, { useEffect, useState } from 'react';
import './Main.scss';
import FeedItem from './FeedItem';
import StoryItem from './StoryItem';
import Recommend from './Recommend';

const MainSujeong = () => {
  const [feedItem, setFeedItem] = useState([]);
  const [storyItem, setStoryItem] = useState([]);
  const [recommendItem, setRecommendItem] = useState([]);

  useEffect(() => {
    fetch('/data/feed_data.json')
      .then(res => res.json())
      .then(data => {
        setFeedItem(data);
      });
    fetch('/data/story_data.json')
      .then(res => res.json())
      .then(data => {
        setStoryItem(data);
      });
    fetch('/data/recommend_data.json')
      .then(res => res.json())
      .then(data => {
        setRecommendItem(data);
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
            return <FeedItem item={item} />;
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
              {storyItem.map(item => {
                return <StoryItem item={item} />;
              })}
            </ul>
          </div>
          <div className="recommendListArea">
            <div className="recommendListTop">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recommendList">
              {recommendItem.map(item => {
                return <Recommend item={item} />;
              })}
            </ul>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainSujeong;
