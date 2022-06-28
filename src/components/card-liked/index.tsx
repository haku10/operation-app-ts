import React from 'react';

type CardLikedProps = {
  title: string;
  isLiked: boolean;
  toggle: () => void;
};

const CardLiked: React.FC<CardLikedProps> = ({ title, isLiked, toggle }) => {
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
          toggle();
        }}
      />
    </div>
  );
};

export default CardLiked;
