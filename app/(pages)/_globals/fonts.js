import { Inter, Josefin_Sans, Montserrat, Quicksand } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin_sans',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const fonts = [inter, montserrat, josefinSans, quicksand];

const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');
export default font_string;
