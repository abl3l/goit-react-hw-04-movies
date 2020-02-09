import React from 'react';
import T from 'prop-types';
import styles from './CastList.module.css';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <div className={styles.cast_wrap}>
            <img
              src={`https://image.tmdb.org/t/p/w138_and_h175_face/${el.profile_path}`}
              alt="Actor"
            />
            <div>
              <h3>{el.name}</h3>
              <p>{el.character}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  cast: T.arrayOf(
    T.shape({
      id: T.number,
      name: T.string.isRequired,
      character: T.string.isRequired,
      profile_path: T.string,
    }),
  ).isRequired,
};
