import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop,Content } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
   window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
     window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
     this.props.onClose();
    }
  };

  handleBackdropClick = event => {
     if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

render() {
    // const {image}=this.props;
    return createPortal(
       <Backdrop onClick={this.handleBackdropClick}>
        <Content>{this.props.children}
        </Content>
      </Backdrop>,
      modalRoot
    );
  }

}

Modal.propTypes = {
  image: PropTypes.shape({
    id:PropTypes.string.isRequired,
    webformatURL:PropTypes.string.isRequired,
    largeImageURL:PropTypes.string.isRequired,
    }).isRequired,
    onClose:PropTypes.func.isRequired
  }