import { inter } from "../fonts/fonts";

const Blog: React.FC = () => {
  return (
    <>
      <div className="w-full h-full text-center pt-36">
        <h1
          className={`${inter.className} text-xl font-bold text-tertiary text-dark`}
        >
          Blog Page
        </h1>
      </div>
    </>
  );
};

export default Blog;
