import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Experience from './components/experience/experience';
import CompanionSlider from './components/companion-slider/companion-slider';
import Reviews from './components/reviews/reviews';

import './styles/index.scss';

const fontInterTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
});

const fontInstrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
});

const HelveticaNeue = localFont({
  variable: '--font-helvetica-neue',
  src: [
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Light.ttf',
      weight: '200',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Thin.ttf',
      weight: '300',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Roman.ttf',
      weight: '400',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Medium.ttf',
      weight: '500',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Bold.ttf',
      weight: '700',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Heavy.ttf',
      weight: '800',
    },
    {
      path: 'assets/fonts/HelveticaNeue/HelveticaNeueCyr-Black.ttf',
      weight: '900',
    },
  ],
});

export const metadata: Metadata = {
  title: 'AWSMD',
  description: 'We Create Awesome design',
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontInterTight.variable} ${fontInstrumentSerif.variable} ${HelveticaNeue.variable}`}
    >
      <body>
        <div className="page-wrapper">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <CompanionSlider />
            <Reviews />
          </main>
        </div>
      </body>
    </html>
  );
}
