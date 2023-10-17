/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ searchTerm, page }) {
  const ApiKey = '38531038-07b18ea2bd70e8e8bef0f3931';
  const [images, setImages] = useState([]);
  const [siteLoaded, setSiteLoaded] = useState(false);

  const fetchImageData = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        setImages(prevImages => {
          // Prevent double images load from page 1 after website loads
          if (!siteLoaded) {
            setSiteLoaded(true);
            return [...response.data.hits];
          }
          // If loaded and Load More button clicked
          return [...prevImages, ...response.data.hits];
        });
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });
  };

  useEffect(() => {
    if (searchTerm && page === 1) {
      // Clear the images only when a new search is performed
      setImages([]);
    }

    fetchImageData();
  }, [searchTerm, page]);

  return (
    <>
      {images.map(img => (
        <li key={img.id}>
          <a href={img.largeImageURL}>
            <img src={img.webformatURL} alt={img.tags} loading="lazy" />
          </a>
          <div>
            <p>
              <b>Likes</b> {img.likes}
            </p>
            <p>
              <b>Views</b> {img.views}
            </p>
            <p>
              <b>Comments</b> {img.comments}
            </p>
            <p>
              <b>Downloads</b> {img.downloads}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
