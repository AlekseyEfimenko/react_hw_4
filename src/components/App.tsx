import { useState } from 'react';
import './App.css';
import SearchBar from './search-bar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import { searchPhotoByName } from '../splash-api';
import ImageGallery from './image-gallery/ImageGallery';
import ImageModal from './image-modal/ImageModal';
import FadeLoader from "react-spinners/ClipLoader";
import LoadMoreBtn from './load-more-button/LoadMoreBtn';
import { Card } from '../types';

const App = () => {
  const [searchResult, setSearchResult] = useState<Card[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const search = async (target: string) => {
    try {
      setSearchValue(target);
      setSearchResult([]);
      setIsLoading(true);
      const data = await searchPhotoByName(target, 1);
      setSearchResult(data.results);
      setTotalPages(data["total_pages"]);
      setNextPage((prevPage) => prevPage + 1);
    } catch (error) {
      toast.error("Somthing went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const data = await searchPhotoByName(searchValue, nextPage);
      setSearchResult((prevResults) => [...prevResults, ...data.results]);
      setNextPage((prevPage) => prevPage + 1);
    } catch (error) {
      toast.error("Somthing went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const expandImage = (url: string) => {
    setModalImageUrl(url)
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {isModal && <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />}
      <SearchBar onSearch={search} />
      {searchResult.length > 0 && <ImageGallery images={searchResult} onExpand={expandImage} />}
      <FadeLoader
        color='green'
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {nextPage < totalPages && <LoadMoreBtn onLoad={loadMore} />}
    </>
  );
}

export default App;
