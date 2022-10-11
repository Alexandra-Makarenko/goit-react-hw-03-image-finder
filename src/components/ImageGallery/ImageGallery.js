import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery,Item } from './ImageGallery.styled';

export const ImageGallery = ({ images}) => {
  
    return ( <Gallery>
             {images.map((image) => (
                    <Item key={image.id}
                    > {<ImageGalleryItem
                        image={image}           
             />}</Item>
                ))}
    </Gallery>
    );
  };

  ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id:PropTypes.number.isRequired,
        }).isRequired).isRequired,
    }