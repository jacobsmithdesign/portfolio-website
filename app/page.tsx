import Image from "next/image";
import Link from "next/link";
import { fetchNavbarlinks, fetchAbout } from "./lib/fetchData";
import HomePage from "./HomepageWrapper";
import FlareCursor from "./components/FlareCursor";

const Home: React.FC = async () => {
  const navlinks = await fetchNavbarlinks();
  const aboutDetails = await fetchAbout();

  return <HomePage navlinks={navlinks} aboutDetails={aboutDetails} />;
};

export default Home;
