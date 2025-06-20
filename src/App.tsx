import { useState, useEffect } from "react";
import "./App.css";
import { ClipLoader } from "react-spinners";
import { fetchArticles, Image, Photo } from "./Gallery-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [topic, setTopic] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = (newTopic: string): void => {
    setTopic(newTopic);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topic.trim() === "") return;

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data: Photo = await fetchArticles(topic, currentPage);

        setImages((prevImages) => [...prevImages, ...data.images]);
        setTotalPages(data.totalPages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);

  return (
    <>
      <SearchBar onSearch={handleSearch} images={images} />
      {isError && <p>Something went wrong</p>}
      {isLoading && (
        <ClipLoader color="#36d7b7" loading={isLoading} size={50} />
      )}
      <ImageGallery images={images} onImageClick={openModal} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
      <LoadMoreBtn
        onClick={incrementPage}
        currentPage={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        images={images}
      />
    </>
  );
}

export default App;
