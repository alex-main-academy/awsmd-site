import Image from 'next/image';
import { experienceItems } from './experienceItems';
import './experience.scss';

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <div>
          <span className="title-description experience__uptitle">OUR PORTFOLIO</span>
          <p className="experience__description">
            Our user-centered design encourages productivity and boosts revenue.
          </p>
        </div>
        <div>
          <h2 className="title experience__title">
            We <span className="title--decorative">don't</span> do
            <span className="title--decorative"> cookie-cutter</span> solutions
          </h2>
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
        </div>
      </div>
      <ul className="experience__list">
        {experienceItems.map((item, index) => (
          <li key={index} className="experience__item">
            <div className="experience__book">
              <div className="experience__book-avatar"></div>
              <div>
                <span className="experience__book-title">{item.bookTitle}</span>
                <span className="experience__book-text">{item.bookText}</span>
              </div>
              <Image src="/icons/arrow-right-white.svg" width="14" height="12" alt="" />
            </div>
            <Image className="experience__image" src={item.image} width="312" height="405" alt="" />
            <h3 className="experience__name">{item.title}</h3>
            <p className="experience__text">{item.text}</p>
            <div className="experience__labels">
              {item.labels.map((label, index) => (
                <span key={label[index]} className="experience__label">
                  {label}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
