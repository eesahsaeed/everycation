import React from "react";
import Header from "./components/Header";
import "./Home.scss";
import basic_bg from "../assets/basic_bg.png";
import android from "../assets/android_logo.png";
import ios from "../assets/ios_logo.png";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import ImageSlider from "./components/ImageSlider";

export default function BasicInfo() {
  return (
    <>
      <Header />
      <div id="home" className="main__container">
        <img src={basic_bg} alt="" className="main__container__bg" />
        <div className="main__container__overlay">
          <div className="main__container__overlay__sub__heading">
            Explore the world
          </div>
          <div className="main__container__overlay__heading">
            PLAN. SAVE. <br />
            TRAVEL.
          </div>
          <div className="main__container__overlay__para">
            Wave goodbye to all of the typical stress involved in traveling.
            When you rely on Everycation to take care of the logistical details,
            we’ll make sure everything falls into place exactly as it should.
            We’ll get you where you need to be, the way you want it.
          </div>
          <button className="primary__btn">Get Started</button>
          <div className="btn__container">
            <img
              style={{ marginTop: 16 }}
              src={android}
              alt="logo"
              className="play__btns"
            />
            <img src={ios} alt="logo" className="play__btns" />
          </div>
        </div>
        <ImageSlider />
      </div>
      <div className="contact__main__container">
        <div className="browse__packages__container__heading">Basic Info</div>
        <div
          style={{ marginTop: "2em" }}
          className="contact__main__container__content"
        >
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="Name" type="text" required={true} />
            <InputBox placeholder="Phone" type="tel" required={true} />
            <InputBox placeholder="Email" type="email" required={true} />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="Gender" type="text" required={true} />
            <InputBox placeholder="Date of Birth" type="text" required={true} />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="Uk Address 1" type="text" required={true} />
            <InputBox placeholder="Uk Address 2" type="text" required={true} />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="City" type="text" required={true} />
            <InputBox placeholder="Postal Code" type="text" required={true} />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="" type="date" required={true} />
            <InputBox placeholder="Flight Number" type="text" required={true} />
            <InputBox
              placeholder="Passport Number"
              type="text"
              required={true}
            />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox
              placeholder="City of Origin Address 1"
              type="text"
              required={true}
            />
            <InputBox
              placeholder="City of Origin Address 2"
              type="text"
              required={true}
            />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox placeholder="City" type="text" required={true} />
            <InputBox placeholder="Postal Code" type="text" required={true} />
          </div>
          <div className="contact__main__container__content__input__wrapper">
            <InputBox
              placeholder="Confirm Travel Plan"
              type="text"
              required={true}
            />
          </div>
        </div>
        <div className="btn__container__basic__info">
          <div></div>
          <button style={{ width: 250 }} className="primary__btn">
            Pay Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
