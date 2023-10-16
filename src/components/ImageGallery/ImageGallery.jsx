/* eslint-disable */
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.scss';

export default function ImageGallery({ searchTerm, page }) {
  return (
    <ul>
      <ImageGalleryItem searchTerm={searchTerm} page={page} />
    </ul>
  );
}
