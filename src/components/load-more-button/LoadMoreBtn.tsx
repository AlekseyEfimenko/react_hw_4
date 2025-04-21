import React from "react";
import css from './LoadMoreBtn.module.css';

type Props = {
  onLoad: () => void;
}

const LoadMoreBtn: React.FC<Props> = (props) => {
  const { onLoad } = props

  return (
    <button className={css.loadButton} onClick={onLoad}>Load more</button>
  );
}

export default LoadMoreBtn;