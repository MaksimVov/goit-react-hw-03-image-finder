import React, { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  handleClick = e => {
    console.log(e);
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.props.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleKeyPress);
  }

  render() {
    const { imageUrl } = this.props;

    console.log(imageUrl);

    return (
      <div className={styles.overlay} onClick={this.handleClick}>
        <div className={styles.modal}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}
