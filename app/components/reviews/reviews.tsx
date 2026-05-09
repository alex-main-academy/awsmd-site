"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "./reviews.scss";

import IndustrySolutions from "../industry-solutions/industry-solutions";
import MobileApp from "../mobile-app/mobile-app";

export default function Reviews() {
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const AUTOPLAY_DELAY = 5000;

  const reviews = [
    {
      image: "/images/reviews/reviews-example-image.png",
      position: "CrossLead",
      name: "NEIL JOGLEKAR",
      text: "They think about products in terms of how it works and not just how it looks. They’re experts at what they do.",
    },
    {
      image: "/images/reviews/reviews-example-image.png",
      position: "CrossLead 2",
      name: "NEIL JOGLEKAR 2",
      text: "They think about products in terms of how it works and not just how it looks. They’re experts at what they do.",
    },
    {
      image: "/images/reviews/reviews-example-image.png",
      position: "CrossLead 3",
      name: "NEIL JOGLEKAR 3",
      text: "They think about products in terms of how it works and not just how it looks. They’re experts at what they do.",
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div>
          <h2 className="title reviews__title">
            Data <span className="title--decorative">informs</span> - Emotion
            <span className="title--decorative"> Converts</span>
          </h2>
          <p className="reviews__subtitle">
            Data Science to drive calculated growth
          </p>
        </div>
        <div className="reviews__inner">
          <div className="reviews__content">
            <p className="reviews__description">
              More than beautiful visuals, Results-driven solutions.
            </p>
            <div className="reviews__wrapper">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                  setProgressKey((prev) => prev + 1);
                }}
                autoplay={{
                  delay: AUTOPLAY_DELAY,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                className="reviews__slider"
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={index} className="reviews__slide">
                    <div className="reviews__avatar">
                      <Image
                        className="reviews__image"
                        src={item.image}
                        width={64}
                        height={92}
                        alt={item.name}
                      />
                    </div>
                    <div className="reviews__info">
                      <span className="reviews__position">{item.position}</span>
                      <span className="reviews__name">{item.name}</span>
                      <p className="reviews__text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="reviews__pagination">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`reviews__bullet ${
                      index === activeIndex ? "is-active" : ""
                    }`}
                    onClick={() => swiperRef.current.slideTo(index)}
                  />
                ))}
              </div>
            </div>
            <span className="reviews__label">
              From 0 to 2,000 users in just 7 days
            </span>
            <div className="reviews__progress">
              <div
                key={progressKey}
                className="reviews__progress-bar"
                style={
                  {
                    "--duration": `${AUTOPLAY_DELAY}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
          </div>
          <div className="reviews__bottom">
            <IndustrySolutions />
            <MobileApp />
          </div>
        </div>
      </div>
    </section>
  );
}
