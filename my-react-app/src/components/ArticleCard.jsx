import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="card article-card">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div className="card-footer">
        <span className="rating">⭐ {article.rating}</span>
        <span className="author">{article.author}</span>
      </div>
    </div>
  );
};

export default ArticleCard;