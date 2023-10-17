/* eslint-disable */
import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Modal from './Modal/Modal';
import css from './App.module.scss';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('galaxy');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = term => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {selectedImage && <Modal img={selectedImage} />}
      <ImageGallery
        searchTerm={searchTerm}
        page={page}
        setSelectedImage={setSelectedImage}
      />
      <LoadMoreButton onLoadMore={handleLoadMore} />
    </>
  );
};
