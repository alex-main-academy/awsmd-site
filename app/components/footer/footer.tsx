import { footerItems } from "./footerItems";
import Image from "next/image";

import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="helpfull">
          {footerItems.map((item, index) => (
            <ul key={index} className="helpfull__list">
              <li className="helpfull__item">
                <h2 className="helpfull__title">{item.title}</h2>
              </li>
              {item.links.map((el, i) => (
                <li key={i} className="helpfull__item">
                  <a className="helpfull__link" href="">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <h3 className="footer__subtitle">Mail us</h3>
            <p className="footer__description">
              Don’t like the forms? Drop us a line via email
            </p>
            <a className="footer__link" href="">
              info@awsmd.com
              <Image
                src="/icons/arrow-right-full.svg"
                width="16"
                height="16"
                alt=""
              />
            </a>
          </li>
          <li className="footer__item">
            <h3 className="footer__subtitle">Book a call</h3>
            <p className="footer__description">
              Let’s discuss your needs and KPI’s in detail. Speak soon!
            </p>
            <a className="footer__link" href="">
              Let’s talk
              <Image
                src="/icons/arrow-right-full.svg"
                width="16"
                height="16"
                alt=""
              />
            </a>
          </li>
        </ul>
        <div className="footer__bottom">
          <div className="social">
            <span className="social__title">Follow us:</span>
            <ul className="social__list">
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/dribble.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/behance.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/linkedin.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/instagram-social.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/clutch.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <Image
                    src="/icons/x-social.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className="footer__copy">
            © Awsmd LLC . We create{" "}
            <span className="footer__copy-decorative">awesome designs</span>{" "}
            from 2015
          </p>
          <div className="footer__info">
            <a href="" className="footer__info-top">
              Back to the top
              <Image src="/icons/arrow-top.svg" width="8" height="12" alt="" />
            </a>
            <a href="" className="footer__info-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
