import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "react-modal";
import { fetchImages } from "../data-api";
import { useEffect, useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    async function getArticles() {
      const data = await fetchImages();
      setPhotos(data);
      console.log(data);
    }
    getArticles();
  }, []);

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ErrorMessage />
      <ImageGallery items={photos} />
      <Loader />
      <LoadMoreBtn />
      <ImageModal />
    </>
  );
}
