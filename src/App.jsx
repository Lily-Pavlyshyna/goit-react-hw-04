import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { getPhotos } from "./components/apiService/photos";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const {
          total,
          results,
          total_pages,
          per_page = "15",
        } = await getPhotos(query, page);
        console.log({ total, results, total_pages });
        if (!results.length) {
          toast.error("No images found 😭");
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setIsVisible(page < Math.ceil(total / per_page));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setError(null);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (img) => {
    setModalIsOpen(true);
    setModalSrc(img.urls.regular);
    setModalAlt(img.alt_description);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt("");
  };
  useEffect(() => {
    if (error) {
      toast.error(" Something went wrong");
    }
  }, [error]);

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {isVisible && (
        <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
