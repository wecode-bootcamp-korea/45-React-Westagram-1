import React from 'react';

const StoryItem = props => {
  const { id, user_id, user_profile_img, updated_time } = props.item;
  return (
    <li key={id}>
      <div className="storyProfileImgBorder">
        <img src={user_profile_img} alt="프로필 사진" />
      </div>
      <div className="storyUserInfo">
        <p>{user_id}</p>
        <p>{updated_time}분 전</p>
      </div>
    </li>
  );
};
export default StoryItem;
