import React from "react";
import Header from "./components/Header";
import "./Home.scss";
import bg from "../assets/bg.png";
import android from "../assets/android_logo.png";
import ios from "../assets/ios_logo.png";
import popular from "../assets/popular.png";
import browsePackages from "../assets/browsePackages.png";
import browsePic1 from "../assets/browsePic1.png";
import browsePic2 from "../assets/browsePic2.png";
import browsePic3 from "../assets/browsePic3.png";
import browsePic4 from "../assets/browsePic4.png";
import book_bg from "../assets/book_bg.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import service1 from "../assets/service1.png";
import services_bg from "../assets/services_bg.png";
import why_us from "../assets/why_us.png";
import covid_bg from "../assets/covid_bg.png";
import covid_badge from "../assets/covid_badge.png";
import journel_bg from "../assets/journel_bg.png";
import travel_journel from "../assets/travel_journel.png";
import shop_product from "../assets/shop_product.png";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";

function ShopCard({ path }) {
  return (
    <Link
      to={path ? path : "/"}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="main__container__shop__content__card"
    >
      <img
        src={shop_product}
        alt="shop_product"
        className="main__container__shop__content__card__img"
      />
      <div className="main__container__shop__content__card__fvrt">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="main__container__shop__content__card__heading">
        The Anti-Wrinkle Serum Shoppers Call 'Magic'
      </div>
      <div className="main__container__shop__content__card__para">
        If you're still exploring the great outdoors this winter, you might
        (literally) be experiencing some
      </div>
      <div className="main__container__shop__content__card__btn">
        <button
          style={{
            color: "#242424",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          }}
          className="primary__btn"
        >
          View Price
        </button>
      </div>
    </Link>
  );
}

function BrowseCard({ style, src, title, rating }) {
  return (
    <div
      style={style}
      className="browse__packages__container__overlay__content__card"
    >
      <img
        src={src}
        alt="browsePic1"
        className="browse__packages__container__overlay__content__card__img"
      />
      <div className="browse__packages__container__overlay__content__card__overlay">
        <div className="browse__packages__container__overlay__content__card__rating">
          {rating}{" "}
        </div>
        <div className="browse__packages__container__overlay__content__card__content">
          <div className="browse__packages__container__overlay__content__card__content__sub__heading">
            Explore
          </div>
          <div className="browse__packages__container__overlay__content__card__content__heading">
            {title}
          </div>
          <div className="browse__packages__container__overlay__content__card__content__para">
            Showe more tips
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{position: "relative"}}>
      <Header />
      <div id="home" className="main__container">
        <img src={bg} alt="" className="main__container__bg" />
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
          <Link to="/basic-info" className="primary__btn">
            Get Started
          </Link>
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

      <div id="flight" className="popular__places__section">
        <div className="popular__places__section__content">
          <div className="popular__places__section__content__left">
            <img
              src={popular}
              alt="popular"
              className="popular__places__section__content__left__img"
            />
          </div>
          <div className="popular__places__section__content__right">
            <div className="popular__places__section__content__right__heading">
              Where Can You Travel?
            </div>

            <div className="popular__places__section__content__right__sub__heading">
              Popular Places
            </div>
            <div className="popular__places__section__content__right__para">
              Enjoy the benefits of our packages to the sites where our visitors
              have more fun.
              <br /> Property arranged with low costing.
            </div>
            <button className="primary__btn">Click Here to View</button>
          </div>
        </div>
      </div>
      <div id="browse" className="browse__packages__container">
        <div className="browse__packages__container__heading">
          Browse Our Packages
        </div>
        <img
          src={browsePackages}
          alt="browsePackages"
          className="browse__packages__container__img"
        />
        <div className="browse__packages__container__overlay">
          <div className="browse__packages__container__overlay__content">
            <BrowseCard title="Dubai" rating="5.2" src={browsePic1} />
            <BrowseCard title="Africa" rating="5.5" src={browsePic2} />
            <BrowseCard title="Europe" rating="5.3" src={browsePic3} />
            <BrowseCard title="Asia" rating="5.0" src={browsePic4} />
          </div>
        </div>
      </div>
      <div id="book" className="main__container__book">
        <img
          src={book_bg}
          alt="book_bg"
          className="main__container__book__img"
        />
        <div className="main__container__book__overlay">
          <div className="main__container__book__overlay__content">
            <div className="main__container__book__overlay__content__heading">
              Book Your Next Trip in 3 Steps
            </div>
            <div className="main__container__book__overlay__content__card__container">
              <BookCard
                img={book1}
                title="choose destination"
                para=" Work and play in perfectly equal balance. At EveryCation, we know to
        delight and inspire you."
              />
              <BookCard
                img={book2}
                title="Save, load your wallet, 
                or pay from your wallet
                "
                para="Work and play in perfectly equal balance. At EveryCation"
              />
              <BookCard
                img={book3}
                title="Leave the rest to us
                and enjoy your trip
                "
                para=" Work and play in perfectly equal balance."
              />
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="main__container__services">
        <div className="main__container__services__heading">Our Services</div>
        <div className="main__container__services__para">
          Work and play in perfectly equal balance. At EveryCation, we know to
          delight and inspire you, your clients.
        </div>
        <div className="main__container__services__card__container">
          <div className="main__container__services__card">
            <div className="service__card__svg__container">
              <img src={service1} alt="" />
            </div>
            <div className="main__container__services__card__content">
              <div className="main__container__services__card__content__heading">
                Corporate Travel
              </div>
              <div className="main__container__services__card__content__para">
                Work and play in perfectly equal balance. At EveryCation, we
                know to delight and inspire you, your clients, prospects,
                creative teams, and technologists, with distinctive business
                trips that they'll remember for a lifetime
              </div>
            </div>
          </div>
          <div className="main__container__services__card">
            <div className="service__card__svg__container">
              <img src={service1} alt="" />
            </div>
            <div className="main__container__services__card__content">
              <div className="main__container__services__card__content__heading">
                Entertainment Travel
              </div>
              <div className="main__container__services__card__content__para">
                Work and play in perfectly equal balance. At EveryCation, we
                know to delight and inspire you, your clients, prospects,
                creative teams, and technologists, with distinctive business
                trips that they'll remember for a lifetime
              </div>
            </div>
          </div>
        </div>
        <div className="main__container__services__card__container">
          <div className="main__container__services__card">
            <div className="service__card__svg__container">
              <img src={service1} alt="" />
            </div>
            <div className="main__container__services__card__content">
              <div className="main__container__services__card__content__heading">
                Non-Profit Travel
              </div>
              <div className="main__container__services__card__content__para">
                Work and play in perfectly equal balance. At EveryCation, we
                know to delight and inspire you, your clients, prospects,
                creative teams, and technologists, with distinctive business
                trips that they'll remember for a lifetime
              </div>
            </div>
          </div>
          <div className="main__container__services__card">
            <div className="service__card__svg__container">
              <img src={service1} alt="" />
            </div>
            <div className="main__container__services__card__content">
              <div className="main__container__services__card__content__heading">
                Influencer Travel
              </div>
              <div className="main__container__services__card__content__para">
                Work and play in perfectly equal balance. At EveryCation, we
                know to delight and inspire you, your clients, prospects,
                creative teams, and technologists, with distinctive business
                trips that they'll remember for a lifetime
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src={services_bg}
          alt="services_bg"
          className="        main__container__service__bg__img"
        /> */}
      </div>
      <div id="why_us" className="main__container__why__us">
        <div className="main__container__book__overlay__content__heading">
          Why <span> Choose Us?</span>
        </div>
        <div className="main__container__why__us__content">
          <div className="main__container__why__us__content__card">
            <img
              src={why_us}
              alt="why_us"
              className="main__container__why__us__content__card__img"
            />
            <div className="main__container__why__us__content__card__heading">
              The World at Your Fingertips
            </div>
            <div className="main__container__why__us__content__card__para">
              Work and play in perfectly equal balance. At EveryCation, we know
              to delight and inspire you.
            </div>
          </div>
          <div className="main__container__why__us__content__card">
            <img
              src={why_us}
              alt="why_us"
              className="main__container__why__us__content__card__img"
            />
            <div className="main__container__why__us__content__card__heading">
              Sharp Travel Plannig
            </div>
            <div className="main__container__why__us__content__card__para">
              Work and play in perfectly equal balance. At EveryCation, we know
              to delight and inspire you.
            </div>
          </div>
          <div className="main__container__why__us__content__card">
            <img
              src={why_us}
              alt="why_us"
              className="main__container__why__us__content__card__img"
            />
            <div className="main__container__why__us__content__card__heading">
              The Latest Technology
            </div>
            <div className="main__container__why__us__content__card__para">
              Work and play in perfectly equal balance. At EveryCation, we know
              to delight and inspire you.
            </div>
          </div>
        </div>
      </div>
      <div id="journel" className="main__container__journel">
        <img
          src={journel_bg}
          alt="journel_bg"
          className="main__container__journel"
        />
        <div className="main__container__journel__overlay">
          <div className="main__container__journel__overlay__content">
            <div className="main__container__journel__overlay__content__heading">
              TRAVEL JOURNAL
            </div>
            <div className="main__container__journel__overlay__content__wrapper">
              <div className="main__container__journel__overlay__content__wrapper__left">
                <div className="main__container__journel__overlay__content__wrapper__left__heading">
                  Capture The <br /> Everyday Details
                </div>
                <div className="main__container__journel__overlay__content__wrapper__left__para">
                  For travelers who tend to keep every single detail, ticket,
                  receipt, or entry pass after a trip, this journal is for you.
                  It features Audio, video and pictures functionalities to store
                  all of your keepsakes as well as memories. This journal is fun
                  to use and also allows travelers to share memories with
                  friends and family...
                </div>
                <div className="main__container__journel__overlay__content__wrapper__left__btn__container">
                  <button className="primary__btn">Get Started</button>
                  <button className="primary__btn__black">
                    hire tour guides
                  </button>
                </div>
                <button className="primary__btn__black">
                  Hire tour photographers
                </button>
              </div>
              <div className="main__container__journel__overlay__content__wrapper__right">
                <img
                  src={travel_journel}
                  alt="travel_journel"
                  className="main__container__journel__overlay__content__wrapper__right__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="shop" className="main__container__shop">
        <div className="main__container__shop__content__heading">
          Travel <span>Shop</span>
        </div>
        <div className="main__container__shop__content">
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
        </div>
      </div>
      <div id="contact" className="main__container__contact">
        <div className="main__container__contact__content">
          <div className="main__container__contact__content__left">
            <div className="main__container__contact__content__left__heading">
              Contact <span> EveryCation</span>
            </div>
            <div className="main__container__contact__content__left__para">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you 🙂
            </div>
            <form className="main__container__contact__content__left__form">
              <div className="main__container__contact__content__left__form__input__wrapper">
                <div className="main__container__contact__content__left__form__left">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="main__container__contact__content__left__form__input"
                  />
                </div>
                <div className="main__container__contact__content__left__form__right">
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="main__container__contact__content__left__form__input"
                  />
                </div>
              </div>
              <div className="main__container__contact__content__left__form__input__wrapper">
                <div className="main__container__contact__content__left__form__left">
                  <input
                    placeholder="Email"
                    type="email"
                    className="main__container__contact__content__left__form__input"
                  />
                </div>
                <div className="main__container__contact__content__left__form__right">
                  <input
                    placeholder="Phone"
                    type="tel"
                    className="main__container__contact__content__left__form__input"
                  />
                </div>
              </div>
              <div className="main__container__contact__content__left__form__input__wrapper">
                <input
                  placeholder="Message"
                  type="text"
                  className="main__container__contact__content__left__form__input"
                />
              </div>
              <button
                type="submit"
                style={{ color: "#242424", marginTop: "2em" }}
                className="primary__btn"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="main__container__contact__content__right">
            <div className="main__container__contact__content__right__heading">
              ADDRESS
            </div>
            <div className="main__container__contact__content__right__para">
              53 King St, East, Stoney Creek, ON
            </div>
            <div className="main__container__contact__content__right__para">
              1048 King St, West, Hamilton, ON
            </div>
            <div className="main__container__contact__content__right__heading">
              Telphone
            </div>
            <div className="main__container__contact__content__right__para">
              TEL : 905.662.0491 (Stoney Creek)
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
