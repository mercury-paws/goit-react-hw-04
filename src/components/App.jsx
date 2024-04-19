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
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value) => {
    console.log(value);
  };

  useEffect(() => {
    async function getPhotos() {
      setIsLoading(true);
      const data = await fetchImages("fox");
      setIsLoading(false);
      setPhotos(data);
      console.log(data);
    }
    getPhotos();
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ErrorMessage />
      {isLoading && <Loader />}
      {photos.length > 0 && <ImageGallery items={photos} />}

      <LoadMoreBtn />
      <ImageModal />
    </>
  );
}
