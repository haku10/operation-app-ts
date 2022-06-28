import React, { useState, useEffect } from 'react';

const UserDisLiked: React.FC = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);
  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById('counter')?.addEventListener('click', countUp);
    if (count >= 10) {
      counter(0);
    }
    return () => {
      console.log('Unmounting');
      document.getElementById('counter')?.removeEventListener('click', countUp);
    };
  }, [limit]);
  return (
    <div>
      <button id={'counter'}>Bad: {count}</button>
      <button onClick={() => release(false)}>もっといいねしたい</button>
    </div>
  );
};

export default UserDisLiked;
