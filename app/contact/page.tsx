import { inter } from "../fonts/fonts";
import { HoverGradient3 } from "../components/hoverGradient";
import { Form } from "react-hook-form";
import ContactForm from "./contact";
import GridBackground from "../ui/gridBackground";
const Contact: React.FC = async () => {
  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500 text-dark dark:text-light bg-light dark:bg-dark">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden ">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip transition-all duration-300">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Contact.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="justify-center hide-scrollbar md:px-0 px-2 transition-all duration-500 max-w-[38rem]  mx-auto absolute z-20">
            <a
              href="mailto:jwj.smith98@gmail.com"
              data-flare="Send an email"
              className="flex"
            >
              <h1 className="md:text-2xl text-xl font-bold mb-2 md:hover:text-yellowpastel transition-all duration-300 flex">
                jwj.smith98@gmail.com
              </h1>
            </a>
            <a href="tel:61406153960" data-flare="Call me" className="flex">
              <h1 className="md:text-2xl text-xl font-bold mb-2 md:hover:text-bluepastel transition-all duration-300">
                +61 406 153 960
              </h1>
            </a>

            <h1 className="md:text-2xl text-xl font-bold mb-2">
              Make an enquiry
            </h1>
            <ContactForm />
          </div>
          <GridBackground />
        </div>
      </div>
    </div>
  );
};

export default Contact;
