import React, { useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const Modal = ({ imageUrls }) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox(
      imageUrls.map(url => ({ src: url })),
      {
        elements: '.gallery a',
        closeOnOverlayClick: false, // Ensure the overlay doesn't close the modal
      }
    );
    lightbox.on('show.simplelightbox', function (e) {
      e.preventDefault();
    });
    return () => {
      lightbox.destroy();
    };
  }, [imageUrls]);

  return (
    <div className="gallery">
      {imageUrls.map((url, index) => (
        <a href={url} key={index}>
          <img src={url} alt={`Image ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default Modal;
