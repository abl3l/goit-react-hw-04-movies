import React from 'react';
import T from 'prop-types';
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <div className={styles.reviews_wrap}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: T.arrayOf(
    T.shape({
      id: T.string,
      author: T.string.isRequired,
      content: T.string.isRequired,
    }),
  ).isRequired,
};
