import React, { Component } from 'react';
import * as API from '../../services/Api';
import MovieList from '../../components/MovieList/MovieList.jsx';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    API.getTrendingMovies().then(({ data }) =>
      this.setState({ movies: data.results }),
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </div>
    );
  }
}
