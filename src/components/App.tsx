import { useState } from 'react';
import './App.css';
import SearchBar from './search-bar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { searchPhotoByName } from '../splash-api';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);

  const search = async (target: string) => {
    console.log(target);
    try {
      const data = await searchPhotoByName(target, 1);
      console.log(data);
    } catch (error) {

    } finally {
      
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <SearchBar onSearch={search} />
    </>
  );
}

export default App;
