import React from "react";
import css from './ImageModal.module.css';

type Props = {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = (props) => {
  const { imageUrl, onClose } = props;

  return (
    <div className={css.modal} onClick={onClose}>
      <div className={css.modalImageWrapper}>
        <img
          alt=""
          src={imageUrl}
          className={css.modalImage}
        ></img>
      </div>
    </div>
  )
}

export default ImageModal;