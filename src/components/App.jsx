import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ColorRing } from 'react-loader-spinner';




export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: false,
  
  };
  formSubmitHandler = data => {  
    this.setState(() => { return { searchQuery: data} })
    this.resetPage();
  }
  incrementPage=()=> {
    this.setState((prevState) => { return { page: prevState.page + 1} })
 
}

resetPage=() =>{
  this.setState(() => { return { page: 1} })
  } 

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
         this.fetchImg();
    } 

   if (prevState.error !== this.state.error) {
      toast.error(this.state.error);
    }
  }

  
  fetchImg = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.searchQuery,this.state.page);
      this.setState({ images:[...images] });
    } catch {
      this.setState({ error: 'Failed to load image :(' });
    } finally {
      this.setState({ isLoading: false });
    }
  };



  render() {

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler}/>
         <div>
        
<ImageGallery images = {this.state.images}/>
{(!this.state.isLoading && (this.state.images.length>0)) && <button type='button' onClick={this.incrementPage}>Load more...</button>}
{(this.state.isLoading ) && <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
       
          </div>    
           <Toaster position="bottom-right" />
      </div>
    );
  }
}