import PhotoshopLogo from "../../public/icons/Adobe_Photoshop_CC_icon.svg";
import DatoLogo from "../../public/icons/black_full_logo.svg";
import NextLogo from "../../public/icons/next.svg";
import CSSLogo from "../../public/icons/CSSLogo.svg";
import TailwindLogo from "../../public/icons/Tailwind_CSS_logo.svg";
import FigmaLogo from "../../public/icons/Figma-logo.svg";

export function IconCarousel() {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:md:mx-8 [&_li]:mx-4 animate-infiniteScroll text-light"
      >
        <li className="md:h-16 h-10 md:w-16 w-10 flex">
          <CSSLogo />
        </li>
        <li className="flex md:w-36 w-28 h-full">
          <DatoLogo />
        </li>{" "}
        <li className="md:h-16 h-10 md:w-16 w-12 flex">
          <FigmaLogo />
        </li>
        <li className="h-full md:w-36 w-28 flex">
          <NextLogo />
        </li>
        <li className="h-full md:w-16 w-10 flex ">
          <PhotoshopLogo />
        </li>
        <li className="h-full w-48 flex">
          <TailwindLogo />
        </li>
      </ul>
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:md:mx-8 [&_li]:mx-4  animate-infiniteScroll text-light"
        area-hidden="true"
      >
        <li className="md:h-16 h-10 md:w-16 w-10 flex">
          <CSSLogo />
        </li>
        <li className="flex md:w-36 w-28 h-full">
          <DatoLogo />
        </li>
        <li className="md:h-16 h-10 md:w-16 w-10 flex">
          <FigmaLogo />
        </li>
        <li className="h-full md:w-36 w-28 flex">
          <NextLogo />
        </li>
        <li className="h-full md:w-16 w-10 flex ">
          <PhotoshopLogo />
        </li>
        <li className="h-full w-48 flex">
          <TailwindLogo />
        </li>
      </ul>
    </div>
  );
}
