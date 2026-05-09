"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./examples.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Examples() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const handRef = useRef<HTMLDivElement | null>(null);

  const examplesLeft = [
    "/images/examples/project-1.webp",
    "/images/examples/project-2.webp",
    "/images/examples/project-3.webp",
    "/images/examples/project-4.webp",
    "/images/examples/project-5.webp",
    "/images/examples/project-6.webp",
  ];

  const examplesRight = [
    "/images/examples/project-7.webp",
    "/images/examples/project-8.webp",
    "/images/examples/project-9.webp",
    "/images/examples/project-10.webp",
    "/images/examples/project-11.webp",
    "/images/examples/project-12.webp",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const conditions = context.conditions as {
            isMobile: boolean;
            isDesktop: boolean;
          };

          const { isMobile } = conditions;

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top+=100",

            end: isMobile ? "bottom bottom-=270" : "bottom bottom+=50",

            pin: handRef.current,
            pinSpacing: false,
          });
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="examples" ref={sectionRef}>
      <div className="container">
        <div className="examples__left">
          <ul className="examples__list">
            {examplesLeft.map((item, index) => (
              <li key={index} className="examples__item">
                <Image
                  className="examples__image"
                  src={item}
                  width={293}
                  height={634}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="examples__hand" ref={handRef}>
          <Image
            className="examples__hand-image"
            src="/images/examples/hand.webp"
            width={293}
            height={634}
            alt=""
          />
        </div>
        <div className="examples__right">
          <ul className="examples__list">
            {examplesRight.map((item, index) => (
              <li key={index} className="examples__item">
                <Image
                  className="examples__image"
                  src={item}
                  width={293}
                  height={634}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
