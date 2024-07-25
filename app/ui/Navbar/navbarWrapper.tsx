import { fetchNavbarlinks } from "../../lib/fetchData";
import { Navbar } from "./navbar";
const NavbarWrapper: React.FC = async () => {
  const navlinks = await fetchNavbarlinks();

  return <Navbar navlinks={navlinks} />;
};

export default NavbarWrapper;
