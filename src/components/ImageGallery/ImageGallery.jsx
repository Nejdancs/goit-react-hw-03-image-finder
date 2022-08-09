import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/index';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
