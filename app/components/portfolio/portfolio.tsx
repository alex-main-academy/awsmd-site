import Image from "next/image";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__background">
        <div className="portfolio__background--top">
          <Image
            className="portfolio__background-image"
            src="/images/portfolio/portfolio-bg-desktop.svg"
            width="1920"
            height="1000"
            alt=""
          />
        </div>
        <div className="portfolio__background--bottom"></div>
      </div>
      <div className="container">
        <div>
          <span className="title-description portfolio__description">
            OUR PORTFOLIO
          </span>
          <h2 className="title portfolio__title">
            <span className="title--decorative">Making</span> your business
            outstanding — is a{" "}
            <span className="title--decorative">Science</span>
          </h2>
        </div>
        <p className="portfolio__subtitle">
          Our user-centered design encourages productivity and boosts revenue.
        </p>
        <Image
          className="portfolio__image portfolio__image--mobile"
          src="/images/portfolio/example-mobile.webp"
          width="393"
          height="1239"
          alt=""
        />
      </div>
      <Image
        className="portfolio__image portfolio__image--desktop"
        src="/images/portfolio/example-desktop.webp"
        width="1727"
        height="1219"
        alt=""
      />
    </section>
  );
}
