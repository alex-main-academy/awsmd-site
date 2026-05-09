import Marquee from "react-fast-marquee";
import { solutionsItems } from "./industry-items";

import "./industry-solutions.scss";

export default function IndustrySolutions() {
  return (
    <div className="industry">
      <span className="industry__title">Any industry Right solutions</span>
      <div className="industry__wrapper">
        {solutionsItems.map((item, index) => (
          <Marquee
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            speed={10}
            gradient={false}
          >
            {item.map((text, i) => (
              <span className="industry__item" key={i}>
                {text}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
