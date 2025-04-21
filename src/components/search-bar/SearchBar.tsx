import React, { BaseSyntheticEvent } from "react";
import toast from "react-hot-toast";
import css from './SearchBar.module.css';
import { IoIosSearch } from "react-icons/io";

type Props = {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { onSearch } = props;

  const handleSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    const form = evt.target;
    const inputValue = form.elements.search.value;

    if (inputValue === '') {
      toast.error("Please, input the search value");
      return;
    }

    onSearch(inputValue);
    form.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.formSearch}
        />
        <button type="submit" className={css.formSubmitButton}><IoIosSearch /></button>
      </form>
    </header>
  )
}

export default SearchBar;