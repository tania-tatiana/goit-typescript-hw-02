import { Image } from "../../Gallery-api";
import styles from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ImageModal({
  isOpen,
  onRequestClose,
  image,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p className={styles.info}>Author: {image.user.name}</p>
      <p className={styles.info}>Likes: {image.likes}</p>
      {image.description && (
        <p className={styles.info}>Description: {image.description}</p>
      )}
    </Modal>
  );
}
