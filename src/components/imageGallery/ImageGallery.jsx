import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import { Modal } from 'components/modal/Modal';

export class ImageGallery extends Component {
  state = {
    openModal: false,
    imageUrl: '',
  };

  handleOpenModal = url => {
    this.setState({ openModal: true, imageUrl: url });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false, modalImageUrl: '' });
  };

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.handleCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { children } = this.props;
    const { openModal, imageUrl } = this.state;

    return (
      <div>
        <ul className={styles.ImageGallery}>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              setOpenModal: this.handleOpenModal,
            })
          )}
        </ul>

        {openModal && (
          <Modal
            imageUrl={imageUrl}
            closeModal={this.handleCloseModal}
            handleKeyPress={this.handleKeyPress}
          />
        )}
      </div>
    );
  }
}
