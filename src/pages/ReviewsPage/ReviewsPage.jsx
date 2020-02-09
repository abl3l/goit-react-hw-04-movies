import React, { Component } from 'react';
import ReviewsList from '../../components/ReviewsList/ReviewsList.jsx';
import * as API from '../../services/Api';

const getIdFromProps = props => props.match.params.id;

export default class CastPage extends Component {
  state = { review: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.getMovieReviews(id).then(({ data }) =>
      this.setState({ review: data.results }),
    );
  }

  render() {
    const { review } = this.state;
    return (
      <>
        {review.length > 0 ? (
          <ReviewsList reviews={review} />
        ) : (
          <p>We don&apos;t have any reviews for this movie</p>
        )}
      </>
    );
  }
}
