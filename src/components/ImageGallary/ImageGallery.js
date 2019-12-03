import React from 'react';
import PropTypes from 'prop-types';
import ImageGallaryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from '../styles.module.css';

const ImageGallery = ({ pics, openModal, handleKeyPress }) => {
  return (
    <ul className={style.ImageGallery}>
      {pics.map(el => (
        <ImageGallaryItem
          key={el.id}
          pic={el}
          openModal={openModal}
          handleKeyPress={handleKeyPress}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default ImageGallery;
