"use client";
import Image from "next/image";
import "./header.scss";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <header className="header">
      <div className="container">
        <span className="logo">
          AWSMD
          <small>™</small>
        </span>
        <nav className="header__navigation">
          <ul className="header__list">
            <li className="header__item">
              <a href="#about" className="header__link">
                About Us
              </a>
            </li>
            <li className="header__item">
              <a href="#cases" className="header__link">
                Cases
              </a>
            </li>
            <li className="header__item">
              <a href="#services" className="header__link">
                Services
              </a>
            </li>
            <li className="header__item">
              <a href="#reviews" className="header__link">
                Reviews
              </a>
            </li>
            <li className="header__item">
              <a href="#hiring" className="header__link">
                We’re Hiring
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button button button--secondary">
          Become a client{" "}
          <Image
            className="button__icon"
            src="/icons/arrow-right.svg"
            width="12"
            height="10"
            alt=""
          />{" "}
        </button>
        <button
          className="header__burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={
              isMenuOpen ? "/icons/burger-close.svg" : "/icons/burger-open.svg"
            }
            width="44"
            height="44"
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
