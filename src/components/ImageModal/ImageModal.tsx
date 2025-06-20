import styles from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ImageModal({ isOpen, onRequestClose, image }) {
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
