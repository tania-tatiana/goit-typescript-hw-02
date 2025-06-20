import { Image } from "../../Gallery-api";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
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
