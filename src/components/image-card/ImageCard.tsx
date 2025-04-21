import React from "react";
import { Card } from "../../types";
import css from './ImageCard.module.css';

type Props = {
  imageInfo: Card;
  onExpand: (s: string) => void;
}

const ImageCard: React.FC<Props> = (props) => {
  const {imageInfo ,onExpand } = props
  const { description, urls } = imageInfo;
  const { full, regular } = urls;

  console.log(imageInfo);

  return (
    <div>
      <img
        src={regular}
        alt={description}
        className={css.cardImage}
        onClick={() => onExpand(full)}
      />
    </div>
  );
}

export default ImageCard;