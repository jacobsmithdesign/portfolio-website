import {
  EB_Garamond,
  Inter,
  Poppins,
  Bebas_Neue,
  DM_Serif_Display,
  Platypi,
  VT323,
} from "next/font/google";
import localFont from "next/font/local";

export const garamond = EB_Garamond({ subsets: ["latin"] });
export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "800"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

export const title = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export const serifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export const vt323 = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export const gothic = localFont({
  src: "../fonts/WeddingGothicATF-Medium.woff",
  variable: "--font-gothic",
  display: "swap",
});

export const gothicLight = localFont({
  src: "../fonts/WeddingGothicATFWide-Light.woff",
  variable: "--font-gothic",
  display: "swap",
});

export const tenPounds = localFont({
  src: "../fonts/TenPounds-Regular.woff",
  variable: "--font-ten-pounds",
  display: "swap",
});

export const calendas = localFont({
  src: "../fonts/Calendas Plus Italic.woff",
  variable: "--font-calendas",
  display: "swap",
});

export const neonTube = localFont({
  src: "../fonts/Neontube-Bold.woff",
  variable: "--font-neontube",
  display: "swap",
});
