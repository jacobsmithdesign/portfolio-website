"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTransition } from "../../components/pageTransition";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { inter } from "../../fonts/fonts";

export const Navbar: React.FC<{ navlinks: any }> = ({ navlinks }) => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNavbarLinks, setShowNavbarLinks] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      // Hide navbar on the home page
      setShowNavbarLinks(false);
      setTimeout(() => setShowNavbar(false), 1000);
    } else {
      setShowNavbar(true);
      setTimeout(() => setShowNavbarLinks(true), 500);
    }
  }, [pathname, showNavbar, showNavbarLinks]);
  const navigateHome = () => {
    setShowNavbarLinks(false);
    setTimeout(() => setShowNavbar(false), 1000);
  };
  return (
    <div className="py-2 h-screen">
      <div
        className={`md:w-16 w-10 z-50 flex flex-col ${showNavbar ? "opacity-100" : "opacity-0"} transition-all duration-1000 ease-in-out overflow-clip border border-dark ${showNavbarLinks ? "h-3/4" : "md:h-16 h-10"}`}
      >
        <Link
          href="/"
          className={`md:min-h-16 min-h-10 text-light group items-center flex flex-row`}
          onClick={() => {
            navigateHome();
          }}
        >
          <div className="w-full h-full bg-accent md:group-hover:scale-90 transition-all duration-50 ease-out " />
        </Link>
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${showNavbarLinks ? "h-1/4" : "h-0"} duration-1000 ease-in-out`}
          >
            <div
              className={`h-full w-full transition-all duration-150 overflow-clip ${showNavbarLinks ? "border-t" : "border-t-0"} hover:bg-secondary text-dark flex ${index != 0 ? "border-secondary" : "border-dark"} bg-light relative items-end md:pb-8 pb-4`}
            >
              <h1
                className={`rotate-[-90deg] absolute w-full my-auto transition-all duration-500 delay-200 ${showNavbarLinks ? "opacity-100" : "opacity-0"}`}
              >
                {link.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
