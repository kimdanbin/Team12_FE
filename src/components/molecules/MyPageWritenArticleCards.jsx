import React from 'react';
import Card from '@components/atoms/Card';

const MyPageWritenArticleCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Card
          key={article.boardId}
          orderLocation={article.shopName}
          pickupLocation={article.destination}
          pickupTip={article.tip}
          deadline={article.finishedAt}
          match={article.isMatch}
          to={`/mypage/writen-article/${article.boardId}`}
        />
      ))}
    </div>
  );
};

export default MyPageWritenArticleCards;
