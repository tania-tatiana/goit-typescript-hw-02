import styles from "./ImageCard.module.css";

export default function ImageCard({ image }) {
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
