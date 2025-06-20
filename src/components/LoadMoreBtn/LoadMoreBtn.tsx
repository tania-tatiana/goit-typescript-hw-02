import styles from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({
  onClick,
  currentPage,
  totalPages,
  isLoading,
  images,
}) {
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
