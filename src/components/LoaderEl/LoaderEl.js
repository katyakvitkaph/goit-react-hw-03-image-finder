import React from 'react';
import Loader from 'react-loader-spinner';
import style from './loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderEl = () => {
  return (
    <div className={style.ld}>
      <Loader type="Bars" color="#somecolor" height={80} width={80} />
    </div>
  );
};

export default LoaderEl;
