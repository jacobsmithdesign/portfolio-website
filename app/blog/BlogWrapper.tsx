"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import customRenderers from "./customRenderers";
import Modal from "./blogModal";
import { HoverGradient3 } from "../components/hoverGradient";

function BlogComponent({ blog, onBlogClick }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(
      () => {
        setInitialLoad(false);
      },
      blog.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [blog]);

  return (
    <div className="w-full text-dark dark:text-light">
      <div
        className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {blog.map((blog, index) => (
          <button
            key={index}
            className={`md:h-96 h-56 border-b transition-all duration-300 ${index % 2 == 0 ? "md:border-r-0 border-r" : ""} ${index != 0 ? "md:border-l" : ""}  border-dark dark:border-light items-end flex relative group overflow-clip`}
            onClick={() => onBlogClick(blog)}
          >
            <div
              className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            />
            <h2
              className={`${animateContent ? "md:pb-6 pb-4 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out md:px-4 px-2 md:text-2xl text-md text-left text-balance font-bold absolute z-20 md:group-hover:text-light`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            >
              {blog.title}
            </h2>
            <p className="absolute z-10 top-0 left-0 md:mt-6 md:ml-6 md:group-hover:mt-4 md:group-hover:ml-4 transition-all duration-300 ease-in-out text-dark dark:text-light md:group-hover:text-light font-bold">
              {blog.date}
            </p>
            <Arrow
              className={`md:h-16 h-10 text-dark dark:text-light md:group-hover:text-light top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
            />
            <div className="md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-dark to-transparent absolute w-full h-full" />
            <Image
              src={blog.image.url}
              alt="background image for computer science blog"
              width={400}
              height={400}
              className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-60 transition-all duration-700 ease-in-out md:group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function EnlargedBlog({ blogDetails }) {
  if (!blogDetails) return null;

  return (
    <div>
      <div>
        <h2 className="md:text-4xl text-xl font-bold md:my-8 my-2 text-left md:mr-0 mr-8">
          {blogDetails.title}
        </h2>
      </div>
      <Image
        src={blogDetails.image.url}
        alt={`Image for ${blogDetails.title}`}
        width={800}
        height={800}
        className="object-cover w-full h-96 mb-4"
      />
      <StructuredText
        data={blogDetails.content.value.document}
        customNodeRules={customRenderers}
      />
    </div>
  );
}
export function Blog({ blog }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10`}
          >
            Blog.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12">
          <BlogComponent blog={blog} onBlogClick={handleBlogClick} />
          <Modal isOpen={selectedBlog !== null} onClose={handleClose}>
            <EnlargedBlog blogDetails={selectedBlog} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Blog;
