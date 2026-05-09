import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./hero.scss";

export default function Hero() {
  const logos = [
    {
      src: "/images/hero/intel-logo.webp",
      width: 45,
      height: 19,
      alt: "intel logo",
    },
    {
      src: "/images/hero/uber-logo.webp",
      width: 50,
      height: 18,
      alt: "uber logo",
    },
    {
      src: "/images/hero/oracle-logo.webp",
      width: 104,
      height: 14,
      alt: "oracle logo",
    },
    {
      src: "/images/hero/nutanix-logo.webp",
      width: 99,
      height: 13,
      alt: "nutanix logo",
    },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            We Create <br />{" "}
            <span className="hero__title-decorative">Awesome</span> design
          </h1>
          <p className="hero__description">
            We enable the world's most engaged investors and family offices to
            access professionally managed investment strategies.
          </p>
          <div className="hero__action">
            <button className="button button--secondary">
              Discuss my project
              <Image
                className="button__icon"
                src="/icons/arrow-right-top.svg"
                width="7"
                height="7"
                alt=""
              />
            </button>
            <button className="button button--primary text-white leading-150">
              Check Portfolio
            </button>
          </div>
          <div className="hero__explore">scroll to explore</div>
        </div>
        <div className="hero__info">
          <div className="hero__reel">
            <Image
              src="/images/hero/reel-bg.webp"
              width="102"
              height="71"
              alt=""
            />
            <div className="hero__reel-content">
              <span className="hero__reel-title">Show Reel</span>
              <span className="hero__reel-text">
                We're driven by user‑centered design that drives productivity
                and increases revenue.
              </span>
            </div>
          </div>
          <ul className="hero__state">
            <li className="hero__state-item">
              <Image src="/icons/x.svg" width="16" height="16" alt="" />
              <span>12,4k</span>
            </li>
            <li className="hero__state-item">
              <Image src="/icons/instagram.svg" width="16" height="16" alt="" />
              <span>20,1k</span>
            </li>
            <li className="hero__state-item">
              <Image src="/icons/ball.svg" width="16" height="16" alt="" />
              <span>63,5k</span>
            </li>
            <li className="hero__state-item--white">
              <Image
                src="/images/hero/clutch.webp"
                width="70"
                height="34"
                alt=""
              />
            </li>
          </ul>
          <div className="hero__infinite-wrapper">
            <Marquee speed={25} gradient={false}>
              <div className="hero__infinite-inner">
                {logos.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
