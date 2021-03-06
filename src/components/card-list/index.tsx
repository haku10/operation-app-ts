import * as React from 'react';

type CardListProps = {
  info: string;
};

const cards = ['test', 'rest', 'boot'];

const CardList: React.FC<CardListProps> = ({ info }) => {
  return (
    <div>
      <h2>{info}</h2>
      <div>カードのタイトル</div>
      {cards.map((item) => (
          <div>{item}</div>
      ))}
    </div>
  );
};

export default CardList;
