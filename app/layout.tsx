import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./ui/Navbar/navbarWrapper";
import { PageTransitionProvider } from "./context/PageTransitionContext";
import AnimateLayout from "./components/General/AnimateLayout";
import { fetchNavbarlinks } from "./lib/fetchData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Smith Design",
  description: "Jacob Smith web design and developmenmt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-dark bg-light`}>
        <div className="grain absolute" />
        <PageTransitionProvider>
          <div className="absolute z-50 ml-2">
            <NavbarWrapper />
          </div>
          <AnimateLayout>{children}</AnimateLayout>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
