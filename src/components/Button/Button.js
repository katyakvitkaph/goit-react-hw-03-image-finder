import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles.module.css';

const Button = ({ changePage }) => {
  return (
    <div>
      <button onClick={changePage} type="button" className={style.Button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
