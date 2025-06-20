import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <>
      {images.length > 0 && (
        <ul className={styles.list}>
          {images.map((image) => (
            <li key={image.id} onClick={() => onImageClick(image)}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
