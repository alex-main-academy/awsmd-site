"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import "./mobile-app.scss";

const appItems = [
  {
    prompt: "Fintech mobile app",
    imageUrl: "/images/mobile-app/phone.webp",
  },
  {
    prompt: "Crypto banking dashboard",
    imageUrl: "/images/mobile-app/phone-2.webp",
  },
  {
    prompt: "AI finance assistant",
    imageUrl: "/images/mobile-app/phone-3.webp",
  },
];

export default function MobileApp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentItemIndex = 0;
    let currentCharIndex = 0;

    let typingInterval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      const currentPrompt = appItems[currentItemIndex].prompt;

      setActiveIndex(currentItemIndex);
      setTypedText("");

      typingInterval = setInterval(() => {
        currentCharIndex++;

        setTypedText(currentPrompt.slice(0, currentCharIndex));

        if (currentCharIndex >= currentPrompt.length) {
          clearInterval(typingInterval);

          timeout = setTimeout(() => {
            currentCharIndex = 0;
            currentItemIndex = (currentItemIndex + 1) % appItems.length;

            startTyping();
          }, 2500);
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="app">
      <div className="app__image">
        {appItems.map((item, index) => (
          <Image
            key={item.imageUrl}
            src={item.imageUrl}
            width={86}
            height={188}
            alt={item.prompt}
            className={`app__phone-image ${
              activeIndex === index ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="app__prompt">
        <span className="app__prompt-static">I need a</span>

        <span className="app__prompt-dynamic">
          {typedText}
          <span className="app__cursor"></span>
        </span>
      </div>
    </div>
  );
}
