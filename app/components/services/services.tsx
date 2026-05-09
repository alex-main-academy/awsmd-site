import { servicesItems } from "./servicesItems";

import "./services.scss";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div>
          <span className="title-description">services</span>
          <h2 className="services__title">
            Our user-centered design encourages productivity and boosts revenue.
          </h2>
        </div>
        <ul className="services__list">
          {servicesItems.map((item, index) => (
            <li key={index} className="services__item">
              <h3 className="services__category">{item.category}</h3>
              {item.types.map((type, i) => (
                <span key={i} className="services__type">
                  {type}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
