import Marquee from 'react-fast-marquee';

import './companion-slider.scss';
import Image from 'next/image';

export default function CompanionSlider() {
  const logos = [
    { src: '/images/companions/intel.webp', width: '42', height: '16', alt: 'intel logo' },
    { src: '/images/companions/uber.webp', width: '42', height: '14', alt: 'uber logo' },
    { src: '/images/companions/oracle.webp', width: '87', height: '11', alt: 'oracle logo' },
    {
      src: '/images/companions/morningstar.webp',
      width: '114',
      height: '24',
      alt: 'morningstar logo',
    },
    {
      src: '/images/companions/new-balance.webp',
      width: '51',
      height: '28',
      alt: 'new balance logo',
    },
    { src: '/images/companions/gofundme.webp', width: '80', height: '24', alt: 'gofundme logo' },
    { src: '/images/companions/nutanix.webp', width: '83', height: '11', alt: 'nutanix logo' },
    { src: '/images/companions/upside.webp', width: '59', height: '21', alt: 'upside logo' },
    { src: '/images/companions/statefarm.webp', width: '83', height: '12', alt: 'statefarm logo' },
    {
      src: '/images/companions/morningstar.webp',
      width: '114',
      height: '24',
      alt: 'morningstar logo',
    },
    {
      src: '/images/companions/new-balance.webp',
      width: '51',
      height: '28',
      alt: 'new balance logo',
    },
  ];

  return (
    <section className="companion">
      <ul className="companion__list">
        <Marquee speed={25} gradient={false}>
          {logos.map((logo, i) => (
            <li key={i} className="companion__item">
              <Image src={logo.src} width={+logo.width} height={+logo.height} alt={logo.alt} />
            </li>
          ))}
        </Marquee>
      </ul>
    </section>
  );
}
