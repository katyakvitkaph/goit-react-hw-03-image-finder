import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles.module.css';

const Modal = ({ onClose, pic, handleKeyPress }) => {
  return (
    <div
      className={`${style.Overlay} ${style.ImageGalleryItem}`}
      onClick={onClose}
      onKeyUp={e => handleKeyPress(e)}
      role="presentation"
    >
      <div className={style.Modal}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};
export default Modal;
