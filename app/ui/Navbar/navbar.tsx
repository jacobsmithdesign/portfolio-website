"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useTransition } from "../../components/pageTransition";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { inter } from "../../fonts/fonts";
import {
  HoverGradient,
  HoverGradient2,
  HoverGradient3,
} from "@/app/components/hoverGradient";
import MyThemeContext from "@/app/context/themeContext";
import GridBackground, { GridBackground2 } from "../gridBackground";

export const Navbar: React.FC<{ navlinks: any }> = ({ navlinks }) => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNavbarLinks, setShowNavbarLinks] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Number | null>(null);

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  useEffect(() => {
    if (pathname === "/") {
      // Hide navbar on the home page
      setShowNavbarLinks(false);
      setShowContact(false);
      setTimeout(() => setShowNavbar(false), 1000);
    } else {
      setShowNavbar(true);
      setTimeout(() => setShowNavbarLinks(true), 500);
      setTimeout(() => setShowContact(true), 1500);
    }
  }, [pathname, showNavbar, showNavbarLinks]);
  const navigateHome = () => {
    setShowNavbarLinks(false);
    setShowContact(false);
    setTimeout(() => setShowNavbar(false), 1000);
  };
  return (
    <div className="py-2 h-screen text-dark dark:text-light">
      <div
        className={`md:w-16 w-10 z-50 flex flex-col ${showNavbar ? "opacity-100" : "opacity-0"} transition-all duration-1000 ease-in-out overflow-clip  ${showNavbarLinks ? "h-full" : "md:h-16 h-10"}`}
      >
        <Link
          href="/"
          className={`md:min-h-16 min-h-10 text-light dark:text-dark group items-center flex flex-row`}
        >
          <div className="w-full h-full bg-accent md:group-hover:rounded-sm md:group-hover:scale-90 transition-all duration-50 ease-out" />
        </Link>
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            onClick={() => {
              setSelectedRoute(index);
            }}
            className={`${showNavbarLinks ? "h-1/4 opacity-100" : "h-0 opacity-0"} duration-1000 ease-in-out border-dark dark:border-light border-r border-l ${index == 2 ? "border-b" : ""}`}
          >
            <div
              className={`h-full w-full transition-all duration-150 overflow-clip ${showNavbarLinks ? "border-t" : "border-t-0"}  text-dark dark:text-light flex ${index != 0 ? "border-secondary" : "border-dark dark:border-light"} ${pathname === link.href ? "bg-secondary dark:bg-secondary/30" : "bg-light dark:bg-dark"} relative items-end transition-all duration-500`}
            >
              <h1
                className={`rotate-[-90deg] absolute w-full my-auto transition-all duration-500 delay-200 ${showNavbarLinks ? "opacity-100" : "opacity-0"} z-30 pointer-events-none pl-8`}
              >
                {link.title}
              </h1>
              <GridBackground2 />
            </div>
          </Link>
        ))}
        <Link
          href="/contact"
          className={`md:w-16 w-10 z-50 flex flex-col ${showContact ? "opacity-100" : "opacity-0"} transition-all duration-700 ease-in-out overflow-clip border h-1/4 mt-2 border-dark cursor-pointer bg-dark dark:bg-light group`}
        >
          <h1
            className={`rotate-[-90deg] w-full my-auto transition-all duration-500 ${showContact ? "opacity-100" : "opacity-0"} font-bold text-2xl z-10 text-light dark:text-dark group-hover:text-light bottom-0 mb-10 absolute`}
          >
            Contact
          </h1>
          <HoverGradient />
        </Link>
      </div>
    </div>
  );
};
