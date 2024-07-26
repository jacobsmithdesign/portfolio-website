import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fetchMusic } from "../lib/fetchData";
import MusicWrapper from "./MusicWrapper";
const Musics: React.FC = async () => {
  const music = await fetchMusic();
  return <MusicWrapper music={music} />;
};

export default Musics;
