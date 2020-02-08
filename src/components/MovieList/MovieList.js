import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
    }),
  ).isRequired,
};

export default MovieList;
