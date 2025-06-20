import { Image } from "../../Gallery-api";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  images: Image[];
  onClick: () => void;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
}

export default function LoadMoreBtn({
  onClick,
  currentPage,
  totalPages,
  isLoading,
  images,
}: LoadMoreBtnProps) {
  return (
    <>
      {images.length > 0 && currentPage < totalPages && !isLoading && (
        <button className={styles.button} onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
}
