import { useEffect, useState } from "react";
import css from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../images-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        setShowBtn(data.total_pages && data.total_pages !== page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreBtn = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (url, alt) => {
    setModalIsOpen(true);
    setAlt(alt);
    setUrl(url);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleQuery} />
      {images.length > 0 && (
        <ImageGallery items={images} onOpenModal={handleOpenModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && showBtn && <LoadMoreBtn onClick={loadMoreBtn} />}
      {images.length > 0 && (
        <ImageModal
          onClose={handleCloseModal}
          url={url}
          alt={alt}
          onShow={modalIsOpen}
        />
      )}
    </div>
  );
}
export default App;
