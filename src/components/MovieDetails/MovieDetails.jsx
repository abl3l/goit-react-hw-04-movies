import React from 'react';
import T from 'prop-types';
import styles from './MovieDetails.module.css';

const MovieDetails = ({
  title,
  poster_path,
  vote_average,
  overview,
  genres,
  onGoBack,
}) => {
  return (
    <article className={styles.wrap}>
      <div className={styles.img_wrap}>
        <button type="button" onClick={onGoBack}>
          &#11013; Go Back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={title}
        />
      </div>

      <div>
        <h2>{title}</h2>
        <p>User Score: {`${vote_average * 10}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(el => (
            <li className={styles.li} key={el.id}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  title: T.string.isRequired,
  vote_average: T.number.isRequired,
  poster_path: T.string.isRequired,
  overview: T.string.isRequired,
  onGoBack: T.func.isRequired,
  genres: T.arrayOf(
    T.shape({
      id: T.number,
      name: T.string.isRequired,
    }),
  ).isRequired,
};
