import { Modal } from './Modal';
import { Component } from 'react';
export class ImageGalleryItem extends Component {  
  state = {
    isModalOpen:false,
  }
  modalOpen = (e) => {
    e.preventDefault();
    this.setState({isModalOpen:true});
  };
  modalClose=()=>{
   
    this.setState({isModalOpen:false})
  }
 
  render()
   { 
    const {image}=this.props;
    return (
       <div><a href='image.webformatURL'onClick={this.modalOpen}>
      <img src={image.webformatURL} alt={image.id} /></a>
      <div> {this.state.isModalOpen && <Modal image={image} onClose={this.modalClose}><img src={image.largeImageURL} alt={image.id} /></Modal> }</div>
   </div>
    );}
  };