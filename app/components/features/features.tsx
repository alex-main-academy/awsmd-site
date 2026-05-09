"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { todoItems, messageItems, stepItems } from "./featuresItems";

import "./features.scss";

const DURATION = 2000;

export default function Features() {
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressStep, setProgressStep] = useState(0);

  const [activeMessageCount, setActiveMessageCount] = useState(0);

  const todoDuration = 8000;
  const pause = 1500;

  const todoTotal = todoItems.length;
  const messageTotal = messageItems.length;

  useEffect(() => {
    let frame: number;

    const startCycle = (startTime: number) => {
      const animate = (time: number) => {
        const elapsed = time - startTime;

        const p = Math.min((elapsed / todoDuration) * 100, 100);

        setProgress(p);

        if (p < 100) {
          frame = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setProgress(0);
            setCycle((c) => c + 1);
          }, pause);
        }
      };

      frame = requestAnimationFrame(animate);
    };

    startCycle(performance.now());

    return () => cancelAnimationFrame(frame);
  }, [cycle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessageCount((prev) => {
        if (prev >= messageTotal) return -1;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [messageTotal]);

  useEffect(() => {
    if (activeMessageCount !== -1) return;

    const timeout = setTimeout(() => {
      setActiveMessageCount(1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [activeMessageCount]);

  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    let timeout: NodeJS.Timeout;

    const isLast = activeIndex === stepItems.length - 1;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;

      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / DURATION) * 100, 100);

      // ❌ у последнего элемента прогресса нет
      if (!isLast) {
        setProgressStep(percent);
      }

      if (elapsed < DURATION) {
        raf = requestAnimationFrame(animate);
      } else {
        setProgressStep(0);

        // ✅ последний элемент → ждём 2 сек → полный reset
        if (isLast) {
          timeout = setTimeout(() => {
            setActiveIndex(0);
          }, DURATION);

          return;
        }

        setActiveIndex((prev) => prev + 1);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);

      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [activeIndex, stepItems.length]);

  return (
    <section className="features">
      <div className="container">
        <span className="title-description">Why Awsmd</span>

        <div className="features__separator"></div>

        <div className="features__info">
          <h2 className="title features__title">
            <span className="title--decorative">How we work</span> — is what
            sets us apart
          </h2>

          <p className="features__subtitle">
            <b>Great products don't come from great tools</b> — they come from a
            great process.
          </p>
        </div>

        <ul className="features__list">
          <li className="features__item">
            <div className="features__content features__content--first">
              <div className="todo">
                <h3 className="todo__title">Project Progress</h3>

                <ul className="todo__list">
                  {todoItems.map((item, index) => {
                    const step = ((index + 1) / todoTotal) * 100;
                    const isActive = progress >= step;

                    return (
                      <li
                        key={index}
                        className={`todo__item ${isActive ? "active" : ""}`}
                      >
                        <span className="todo__number">{index + 1}</span>

                        <div>
                          <h4 className="todo__name">{item.title}</h4>
                          <p className="todo__description">{item.text}</p>
                        </div>

                        <Image
                          className="todo__icon"
                          src="/icons/check.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </li>
                    );
                  })}
                </ul>

                <div className="todo__progress">
                  <span
                    className="todo__progress-bar"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="features__name">
                A process that removes guesswork
              </h3>

              <p className="features__description">
                Every project follows a clear 5-phase framework — from discovery
                to launch. You always know what's happening and why.
              </p>
            </div>
          </li>

          <li className="features__item">
            <div className="features__content features__content--second">
              <ul className="message">
                {messageItems.map((item, index) => {
                  const isActive =
                    activeMessageCount !== -1 && index < activeMessageCount;

                  return (
                    <li
                      key={index}
                      className={`message__item ${isActive ? "active" : ""}`}
                    >
                      <span className="message__name">{item.author}</span>
                      <span className="message__text">{item.message}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="features__name">You're heard at every step</h3>

              <p className="features__description">
                Weekly syncs, async updates, and a direct line to your team.
                Feedback turns into action — fast, without losing momentum.
              </p>
            </div>
          </li>

          <li className="features__item">
            <div className="features__content features__content--third">
              <ul className="step">
                {stepItems.map((item, index) => {
                  const isActive = index <= activeIndex;

                  const isLast = index === stepItems.length - 1;

                  const isCurrent = index === activeIndex;

                  const showProgress = isCurrent && !isLast;

                  const showCheck =
                    index < activeIndex || (isLast && isCurrent);

                  return (
                    <li
                      key={index}
                      className={`step__item ${isActive ? "active" : ""}`}
                    >
                      <span className="step__number">{index + 1}</span>

                      <div>
                        <h4 className="step__title">{item.title}</h4>

                        <p className="step__text">{item.text}</p>
                      </div>

                      <div className="step__icon-wrapper">
                        {showCheck ? (
                          <Image
                            className="step__icon"
                            src="/icons/check-green.svg"
                            width={24}
                            height={24}
                            alt=""
                          />
                        ) : showProgress ? (
                          <div
                            className="circle-progress"
                            style={
                              {
                                "--p": progressStep,
                              } as React.CSSProperties &
                                Record<string, string | number>
                            }
                          />
                        ) : (
                          <div className="circle-placeholder" />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="features__name">You own everything we build</h3>

              <p className="features__description">
                Full code, design files, documentation — delivered clean. No
                vendor lock-in, no hidden dependencies. Just a product that's
                truly yours.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
