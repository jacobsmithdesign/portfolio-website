import Image from "next/image";
import { StructuredText } from "react-datocms";
import customRenderers from "../customRenderers";

export default function EnlargedProject({ projectDetails }) {
  if (!projectDetails) return null;
  const background = "light";
  const foreground = "dark";

  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col md:pb-10 pb-4 border-b border-dark dark:border-light md:mb-10 mb-4">
        <Image
          src={projectDetails.image.url}
          alt={`Image for ${projectDetails.title}`}
          width={800}
          height={800}
          className="object-cover md:w-1/2 w-full md:h-72 h-36 drop-shadow-xl rounded-xl"
        />
        <div className="md:w-1/2 w-full md:h-72 p-2 items-end flex">
          <h1 className="md:text-xl text-sm mx-4 text-left text-balance">
            {projectDetails.subcontent}
          </h1>
        </div>
      </div>
      {projectDetails.articles.map((article, index) => (
        <div key={index} className="pb-10">
          <StructuredText
            data={article.articleContent.value.document}
            customNodeRules={customRenderers}
          />
          {article.image?.url && (
            <Image
              src={article.image.url}
              alt={`Article image ${index + 1}`}
              width={800}
              height={800}
              unoptimized
              className="object-contain w-full md:max-h-[32rem] max-h-64 mb-10 drop-shadow-xl"
            />
          )}
        </div>
      ))}
    </div>
  );
}
