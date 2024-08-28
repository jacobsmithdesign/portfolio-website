import { inter } from "../fonts/fonts";
import { HoverGradient3 } from "../components/hoverGradient";
import { Form } from "react-hook-form";
import ContactForm from "./contact";
const Contact: React.FC = async () => {
  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500 text-dark dark:text-light bg-light dark:bg-dark">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip transition-all duration-300">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Contact.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12 px-2 transition-all duration-500 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
