import FlareCursor from "../components/FlareCursor";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fetchGallery } from "../lib/fetchData";
import GalleryWrapper from "./GalleryWrapper";
const Gallery: React.FC = async () => {
  const gallery = await fetchGallery();
  return <GalleryWrapper gallery={gallery} />;
};

export default Gallery;
