import React, { Component } from 'react';
import qs from 'query-string';
import T from 'prop-types';
import Searchbar from '../../components/Searchbar/Searchbar';
import MovieList from '../../components/MovieList/MovieList';
import * as API from '../../services/Api';

export default class MoviesPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func,
    }).isRequired,
    location: T.shape({
      search: T.string,
      query: T.string,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.query) {
      const searchParams = qs.parse(location.search).search;
      this.search(searchParams);
    }
  }

  search = query => {
    API.SearchMovies(query).then(({ data }) =>
      this.setState({ movies: data.results }),
    );
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.search} />
        <MovieList movies={movies} />
      </>
    );
  }
}
