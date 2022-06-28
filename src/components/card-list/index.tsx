import * as React from 'react';

type CardListProps = {
  info: string;
};

const cards = ['test', 'rest', 'boot'];

const CardList: React.FC<CardListProps> = ({ info }) => {
  var count: number = 0;
  return (
    <div>
      <h2>{info}</h2>
      <h3>カードのタイトル</h3>
      {cards?.map((item) => (
        <div key={count++}>{item}</div>
      ))}
    </div>
  );
};

export default CardList;
