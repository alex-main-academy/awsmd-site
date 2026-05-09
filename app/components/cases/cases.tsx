"use client";

import { useState } from "react";
import { casesItems } from "./casesItems";
import Image from "next/image";

import "./cases.scss";

export default function Cases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItems = casesItems[activeIndex];

  return (
    <section className="cases">
      <div className="container">
        <h2 className="title cases__title">
          Announcements,{" "}
          <span className="title--gray">
            <span className="title--decorative">insights</span> and cases
          </span>
        </h2>

        <button className="button button--secondary">
          Show more
          <Image
            className="button__icon"
            src="/icons/arrow-right-top.svg"
            width={7}
            height={7}
            alt=""
          />
        </button>
      </div>

      <div className="cases__content">
        <ul className="filter">
          {casesItems.map((item, index) => (
            <li key={index} className="filter__item">
              <button
                className={`filter__button ${activeIndex === index ? "filter__button--active" : ""
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="filter__name">{item.filter}</span> (
                {item.items.length})
              </button>
            </li>
          ))}
        </ul>

        {/* 👉 теперь рендерим только активный список */}
        <ul className="cases__list">
          {activeItems.items.map((it, ind) => (
            <li key={ind} className="cases__item">
              <h3 className="cases__name">{it.title}</h3>

              <Image
                className="cases__image"
                src={it.imageUrl}
                width={294}
                height={210}
                alt=""
              />

              <div className="cases__lables">
                {it.labels.map((label) => (
                  <span
                    key={label}
                    className={`cases__label cases__label--${label.toLowerCase()}`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h4 className="cases__subtitle">{it.subtitle}</h4>
              <p className="cases__text">{it.text}</p>

              <a href="" className="cases__link">
                {it.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}