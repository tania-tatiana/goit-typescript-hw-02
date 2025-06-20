import { Image } from "../../Gallery-api";
import styles from "./ImageCard.module.css";

export interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div>
      <img
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
