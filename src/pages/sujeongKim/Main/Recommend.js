import React from 'react';
const Recommend = props => {
  const {
    id,
    recommended_user,
    user_profile_img,
    follow_user,
    count_follow_user,
  } = props.item;
  return (
    <li key={id}>
      <div className="recommendInfoArea">
        <img src={user_profile_img} alt="프로필 사진" />
        <div className="recommendUserInfo">
          <p>{recommended_user}</p>
          <p>
            {follow_user}님 외 {count_follow_user}명이 팔로우하고 있습니다
          </p>
        </div>
      </div>
      <p>팔로우</p>
    </li>
  );
};
export default Recommend;
