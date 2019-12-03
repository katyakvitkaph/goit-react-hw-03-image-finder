import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import * as Api from './services/api';
import ImageGallery from './components/ImageGallary/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Loader from './components/LoaderEl/LoaderEl';

const noValue = () => toast('Error', { containerId: 'B' });
export default class App extends Component {
  state = {
    pics: [],
    pageNumber: 1,
    isLoading: false,
    isOpenModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pics } = this.state;

    if (prevState.pics !== pics && pics.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = query => {
    this.setState({ query });
    this.setState({
      isLoading: true,
    });
    Api.fetchArticles(query)
      .then(resData =>
        this.setState({
          pics: resData.data.hits,
        }),
      )
      .catch(noValue())
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    const { query, pageNumber } = this.state;
    this.setState({
      isLoading: true,
    });
    Api.fetchArticles(query, pageNumber + 1)
      .then(resData =>
        this.setState(prevState => ({
          pics: [...prevState.pics, ...resData.data.hits],
          pageNumber: prevState.pageNumber + 1,
        })),
      )
      .catch(noValue())
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  openModal = modalImage => {
    this.setState({ isOpenModal: true, modalImage });
    window.addEventListener('keydown', this.closeModal);
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ isOpenModal: false });
      window.removeEventListener('keydown', this.closeModal);
    }
  };

  handleKeyPress = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 27) {
      this.open();
      e.preventDefault();
    }
  };

  render() {
    const { isOpenModal } = this.state;
    const { pics, isLoading, modalImage } = this.state;
    return (
      <div>
        <ToastContainer />
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery
          pics={pics}
          openModal={this.openModal}
          handleKeyPress={this.handleKeyPress}
        />
        {isLoading && <Loader />}
        {isOpenModal && (
          <Modal
            pic={modalImage}
            handleKeyPress={this.handleKeyPress}
            onClose={this.closeModal}
          />
        )}
        {pics.length > 0 && <Button changePage={this.changePage} />}
      </div>
    );
  }
}
