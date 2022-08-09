import { Image, ModalBody, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.toggle();
  };

  clickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.toggle();
    }
  };

  render() {
    const { image, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.clickOnBackdrop}>
        <ModalBody>
          <Image src={image} alt={tags} />
        </ModalBody>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
};
