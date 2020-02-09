import React, { Component, Suspense } from 'react';
import { Route, NavLink } from 'react-router-dom';
import T from 'prop-types';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';
import * as API from '../../services/Api';
import routes from '../../routes/Routes';
import MovieLoader from '../../components/Loader/Loader.jsx';
import styles from './MovieDetailsPage.module.css';

const getIdFromProps = props => props.match.params.id;

const activeStyle = { color: 'palevioletred' };

export default class MovieDetailsPage extends Component {
  state = { movies: null };

  static propTypes = {
    match: T.shape({
      url: T.string,
      path: T.string,
      params: T.shape({
        id: T.string,
      }),
    }).isRequired,
    history: T.shape({
      goBack: T.func,
      push: T.func,
    }).isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.getMovieDetails(id).then(movies => this.setState({ movies }));
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { match } = this.props;
    const { movies } = this.state;
    return (
      <>
        {movies && (
          <>
            <MovieDetails {...movies} onGoBack={this.goBack} />
            <hr />
            <h4>Additional information</h4>
            <ul>
              <div className={styles.info_wrap}>
                <li>
                  <NavLink to={`${match.url}/cast`} activeStyle={activeStyle}>
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${match.url}/review`} activeStyle={activeStyle}>
                    Review
                  </NavLink>
                </li>
              </div>

              <hr />
            </ul>
            <Suspense fallback={MovieLoader}>
              <Route
                path={`${match.path}/cast`}
                component={routes.CAST_PAGE.component}
              />
              <Route
                path={`${match.path}/review`}
                component={routes.REVIEWS_PAGE.component}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
