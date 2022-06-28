import React, { useState } from 'react';
import useSound from 'use-sound';
import Test from './audio/test.mp3';

type UserLikedProps = {
  title: string;
};

const UserLiked: React.FC<UserLikedProps> = ({ title }) => {
  const [isLiked, toggleLiked] = useState(false);
  const [play] = useSound(Test);
  return (
    <div>
      <h2>{title}</h2>
      <label htmlFor="check">いいね</label>
      <input
        type="checkbox"
        checked={isLiked}
        id="check"
        onChange={() => {}}
        onClick={() => {
          console.log('test');
          play();
          toggleLiked(!isLiked);
        }}
      />
    </div>
  );
};

export default UserLiked;
