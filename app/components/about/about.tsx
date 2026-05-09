"use client";

import { useRef, useState, useEffect } from "react";
import "./about.scss";

const videos = [
  {
    src: "/videos/about-first-slide.mp4",
    title: "Mobile Design",
  },
  {
    src: "/videos/about-second-slide.mp4",
    title: "Branding",
  },
  {
    src: "/videos/about-third-slide.mp4",
    title: "Website Design",
  },
  {
    src: "/videos/about-fourth-slide.mp4",
    title: "Development",
  },
];

export default function About() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");

    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => {
      const video = videoRef.current;

      if (video && video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  return (
    <section className="about">
      <div className="about__video">
        <video
          key={index}
          ref={videoRef}
          className="about__video-item"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
        >
          <source src={videos[index].src} type="video/mp4" />
        </video>
        {isDesktop && (
          <div
            className="about__progress-segments"
            style={{
              ["--aws-about-videos-count" as any]: videos.length,
            }}
          >
            {videos.map((_, i) => (
              <div
                key={i}
                className="about__progress-segments-item"
                style={
                  {
                    "--aws-about-video-mark": i === index ? "block" : "none",
                    "--aws-about-video-title-color":
                      i === index ? "rgb(0 0 0)" : "rgb(171 171 171)",
                  } as React.CSSProperties
                }
              >
                <span className="about__progress-segment-title">
                  {videos[i].title}
                </span>
                <div key={i} className="about__progress-segment">
                  <div
                    className="about__progress-segment-fill"
                    style={{
                      width:
                        i < index
                          ? "100%"
                          : i === index
                            ? `${progress}%`
                            : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="about__content">
        <h2 className="about__title">
          <span className="about__title--black">As a tight-knit</span>{" "}
          <span className="about__title--decorative">team of experts</span>, we
          create memorable and emotional websites, digital experiences, and
          native apps.
        </h2>
        <h3 className="about__subtitle">{videos[index].title}</h3>
        <p className="about__description">
          Many years of expertise in mobile development allow us to design
          architecture and create bespoke native applications for Apple iOS and
          Google Android.
        </p>
        <div className="about__type">
          <span className="about__label">Brand</span>
          <span className="about__label">Technology & AI</span>
        </div>
        {!isDesktop && (
          <>
            <div className="about__progress-state">
              <span className="about__progress-title">
                {videos[index].title}
              </span>
              <div className="about__progress-video">
                <span className="about__progress-video-current">
                  {index + 1}
                </span>
                <span className="about__progress-video-all">
                  -0{videos.length}
                </span>
              </div>
            </div>
            <div className="about__progress">
              <div
                className="about__progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
