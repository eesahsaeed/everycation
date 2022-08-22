import React from "react";
import logo from "../../assets/logo.png";
import "../Home.scss";

export default function Footer() {
  return (
    <div className="footer__conatiner">
      <div className="footer__overlay__content__col">
          <img
            src={logo}
            alt="logoDark"
            className="footer__overlay__content__col__img"
          />
          <div className="footer__overlay__content__col__text">
            We are committed to fulfilling your traveling dreams.
          </div>
        </div>
      <div className="footer__conatiner__content">
        
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">Product</div>
          <a href="#about" className="footer__overlay__content__col__entry">
            Product
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Features
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Pricing
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Case Studies
          </a>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">Services</div>
          <a href="#about" className="footer__overlay__content__col__entry">
            Product
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Features
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Pricing
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Case Studies
          </a>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">
            Solutions
          </div>
          <a href="#about" className="footer__overlay__content__col__entry">
            Product
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Features
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Pricing
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Case Studies
          </a>
        </div>
      </div>
      <div className="footer__overlay__content__bar"></div>
      <div className="footer__overlay__content__para">
        Copyright © 2022 EveryCation
      </div>
    </div>
  );
}
