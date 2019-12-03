import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../styles.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    const { onSearch } = this.props;
    e.preventDefault();
    const { search } = this.state;

    onSearch(search);
    this.setState({ search: '' });
    // this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style['SearchForm-button']}>
            <span className={style['SearchForm-button-label']}>Search</span>
          </button>
          <input
            className={style['SearchForm-input']}
            type="text"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
