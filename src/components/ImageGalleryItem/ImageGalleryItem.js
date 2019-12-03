import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles.module.css';

const ImageGalleryItem = ({ pic, openModal, handleKeyPress }) => {
  return (
    <li
      onClick={() => openModal(pic.largeImageURL)}
      onKeyUp={e => handleKeyPress(e)}
      className={style.ImageGalleryItem}
      role="presentation"
    >
      <img
        src={pic.largeImageURL}
        alt=""
        className={style.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  pic: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
