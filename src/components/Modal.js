import { Component } from 'react';
// import './Modal.styled.js';
import { Backdrop,Content,Img } from './Modal.styled';
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