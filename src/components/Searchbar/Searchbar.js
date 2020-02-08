import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Searchbar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className={styles.search}
          value={value}
          onChange={this.handleChange}
          type="text"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
