import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import css from './App.module.scss';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('galaxy');
  const [page, setPage] = useState(1);

  const handleSearch = term => {
    setSearchTerm(term);
    setPage(1); // Reset page to 1 when performing a new search
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery searchTerm={searchTerm} page={page} />
      <LoadMoreButton onLoadMore={handleLoadMore} />
    </>
  );
};
