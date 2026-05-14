"use client";
import Image from "next/image";

import "./menu.scss";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <div className={`menu ${isMenuOpen ? "active" : ""}`}>
      <div className="menu__inner">
        <h2 className="menu__title">Menu</h2>
        <ul className="menu__list">
          <li className="menu__item">
            <a
              href="#about"
              className="menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu__numer">0.1 / </span>
              About Us
            </a>
          </li>
          <li className="menu__item">
            <a
              href="#cases"
              className="menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu__numer">0.2 / </span>
              Cases
            </a>
          </li>
          <li className="menu__item">
            <a
              href="#services"
              className="menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu__numer">0.3 / </span>
              Services
            </a>
          </li>
          <li className="menu__item">
            <a
              href="#reviews"
              className="menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu__numer">0.4 / </span>
              Reviews
            </a>
          </li>
          <li className="menu__item">
            <a
              href="#hiring"
              className="menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu__numer">0.5 / </span>
              We’re Hiring
            </a>
          </li>
        </ul>
        <span className="menu__subtitle">Mail us</span>
        <p className="menu__description">
          Don’t like the forms? Drop us a line via email
        </p>
        <a href="" className="menu__info-link">
          info@awsmd.com
          <Image
            src="/icons/arrow-right-full.svg"
            width="16"
            height="16"
            alt=""
          />
        </a>
        <ul className="menu__social">
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image src="/icons/dribble.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image src="/icons/behance.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image src="/icons/linkedin.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image
                src="/icons/instagram-social.svg"
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image src="/icons/clutch.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li className="menu__social-item">
            <a href="" className="menu__social-link">
              <Image src="/icons/x-social.svg" width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
