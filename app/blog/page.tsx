import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fetchBlog } from "../lib/fetchData";
import BlogWrapper from "./BlogWrapper";
const Blogs: React.FC = async () => {
  const blog = await fetchBlog();
  return <BlogWrapper blog={blog} />;
};

export default Blogs;
