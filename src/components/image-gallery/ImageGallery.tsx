import React from "react";
import { Card } from "../../types";
import ImageCard from "../image-card/ImageCard";
import css from './ImageGallery.module.css';

type Props = {
  images: Card[];
  onExpand: (s: string) => void;
}

const ImageGallery: React.FC<Props> = (props) => {
  const { images, onExpand } = props;
  console.log(images);

  return (
    <ul className={css.gallery}>
      {images.map(card => {
        return (
          <li key={card.id} className={css.galleryItem}>
            <ImageCard imageInfo={card} onExpand={onExpand} />
          </li>
        )
      })}
    </ul>
  );
}

export default ImageGallery;