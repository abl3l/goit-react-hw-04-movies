import React, { Component } from 'react';
import CastList from '../../components/CastList/CastList';
import * as API from '../../services/Api';

const getIdFromProps = props => props.match.params.id;

export default class CastPage extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.getMovieCredits(id).then(({ data }) =>
      this.setState({ cast: data.cast }),
    );
  }

  render() {
    const { cast } = this.state;
    return <CastList cast={cast} />;
  }
}
