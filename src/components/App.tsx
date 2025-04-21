import { useState } from 'react';
import './App.css';
import SearchBar from './search-bar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { searchPhotoByName } from '../splash-api';
import ImageGallery from './image-gallery/ImageGallery';
import ImageModal from './image-modal/ImageModal';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const search = async (target: string) => {
    try {
      const data = await searchPhotoByName(target, 1);
      setSearchResult(data.results);
    } catch (error) {

    } finally {

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
    </>
  );
}

export default App;
