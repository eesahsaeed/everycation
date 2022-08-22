import React from "react";
import Header from "./components/Header";
import "./Home.scss";
import basic_bg from "../assets/basic_bg.png";
import android from "../assets/android_logo.png";
import ios from "../assets/ios_logo.png";
import covid__text__pic from "../assets/covid__text__pic.png";
import covid_bg from "../assets/covid_bg.png";
import covid_badge from "../assets/covid_badge.png";
import travel__showcase from "../assets/travel__showcase.png";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";

function CoronaShowCaseCard({ title, para }) {
  return (
    <div className="covid__travel__showcase__content__card">
      <div className="covid__travel__showcase__content__card__heading">
        {title}
      </div>
      <div className="covid__travel__showcase__content__card__para">{para}</div>
    </div>
  );
}

function CovidCard({ title, span }) {
  return (
    <div className="mian__container__covid__overlay__content__card">
      <img src={covid_badge} alt="covid_badge" className="covid__badge" />
      <div className="mian__container__covid__overlay__content__card__heading">
        {title} <br /> {span}
      </div>
      <div className="mian__container__covid__overlay__content__card__para">
        2 x HOME SAMPLE TEST KITS
      </div>
      <div className="mian__container__covid__overlay__content__card__bullet">
        We aim to provide results in 24 hours from booking sample lab
      </div>
      <div className="mian__container__covid__overlay__content__card__bullet">
        Rapid result and cetificate download from online dashboar
      </div>
      <div className="mian__container__covid__overlay__content__card__bullet">
        Optional swab drop-in to lab
      </div>
      <div className="mian__container__covid__overlay__content__card__bullet">
        Free pre-paid return labels
      </div>
      <button className="btn__secondary">
        <span>£120 </span>
        Book Now
      </button>
    </div>
  );
}

function CoronaTravelCard() {
  return (
    <div className="corona__test__main__section__content__card">
      <div className="corona__test__main__section__content__card__logo__wrapper">
        <img
          src={covid__text__pic}
          alt="covid__text__pic"
          className="corona__test__main__section__content__card__logo"
        />
      </div>
      <div className="corona__test__main__section__content__card__heading">
        Apology for service delays
      </div>
      <div className="corona__test__main__section__content__card__para">
        We sincerely apologise to customers having difficulties contacting
        Oncologica or experiencing order delays. Our teams are working to
        respond to the unprecedented demand for testing since government travel
        rules changed. We understand the importance of timely services, so we
        are increasing our call centre team to deal with this increased demand.
        Our postal and courier delivery partners are also encountering issues
        with the increased test dispatch and return deliveries. Although their
        service quality is outside our control, we are liaising with them to
        improve deliveries to our lab. We thank customers for their patience
        whilst we work to return to our normal service levels.
      </div>
    </div>
  );
}
export default function CovidScreen() {
  return (
    <>
      <Header />
      <div id="home" className="main__container">
        <img src={basic_bg} alt="basic_bg" className="main__container__bg" />
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
      <div className="corona__test__main__section">
        <div className="corona__test__main__section__heading">
          Corona Test for Travel
        </div>
        <div className="corona__test__main__section__content">
          <CoronaTravelCard />
          <CoronaTravelCard />
        </div>
      </div>
      <div id="covid" className="mian__container__covid">
        <img
          src={covid_bg}
          alt="covid_bg"
          className="main__container__covid__img"
        />
        <div className="mian__container__covid__overlay">
          <div className="mian__container__covid__overlay__content">
            <div className="mian__container__covid__heading">
              Which test should <span>I take?</span>
            </div>
            <div className="mian__container__covid__para">
              We recommend you swab at the start of your pre-travel test window
              (not before!) to allow enough time for your result to be
              available. For PCR testing, place in Royal Mail priority box
              before 4pm GMT on the day you swab to enable next day delivery to
              lab. For Lateral Flow, complete your swab and upload at least 4
              hours before cross-border travel to enable verification and
              certificate delivery. The outbound entry and UK arrivals rules
              depend on your vaccination status, age and where you travel from
              or to. Look at the latest gov.uk advice for your destination
              country.
            </div>
            <CovidCard title="  DAY 2 AND DAY 8 PCR" span="(UNVACCINATED)" />
            <CovidCard title="DAY 2 PCR" span="(VACCINATED)" />
          </div>
        </div>
      </div>
      <div className="covid__travel__showcase">
        <img
          src={travel__showcase}
          alt="travel__showcase"
          className="covid__travel__showcase__img"
        />
        <div className="covid__travel__showcase__content">
          <CoronaShowCaseCard
            title="NON-TRAVEL 
NOTICE"
            para=" Please note that these General Testing kits will not be valid or
        accepted by travel companies for boarding of flights, ferries or trains.
        These tests do not include the travel certificate required by all travel
        companies. If you are travelling, purchase the correct test above for
        your inbound or outbound journey."
          />
          <CoronaShowCaseCard
            title="ALL TEST KITS 
INCLUDE:"
            para="Phone, Chat and email support Easy swabbing instructions Next working day UK delivery for orders before midday (GMT) Arrivals tests are dispatched on Day 0 and TTR on Day 4 in per Government rules Optional Hand Pickup CE marked
"
          />
          <CoronaShowCaseCard
            title="GERMANY ENTRY 
RESTRICTIONS"
            para="From 23:00 hrs on 19th Dec, only German citizens and residents may enter into the country from the UK (with limited exemptions) Visit GOV.UK for updates

"
          />
          <CoronaShowCaseCard
            title="PORTUGAL ENTRY 
RESTRICTIONS"
            para="Portugal no longer accepts self-administered PCR or Lateral Flow tests as valid for entry into the country. Visit GOV.UK for updates

"
          />
          <CoronaShowCaseCard
            title="FRANCE ENTRY 
RESTRICTIONS
"
            para="From Saturday 18th Dec 2021, all travellers must present a negative PCR or Lateral Flow test result taken within 24 hours pre-departure. Due to turnaround, we do not recommend booking a PCR test for travel to France. Our Lateral Flow tests are certified by our lab under medical supervision so meet entry criteria. Visit GOV.UK for updates

"
          />
          <CoronaShowCaseCard
            title="USA ENTRY 
RESTRICTIONS"
            para="All travellers visiting the USA, regardless of vaccination status, are required to show a negative test result taken no more than 24 hours before travel. Due to turnaround, we do not recommend booking a PCR test for travel to the USA. Note that our Lateral Flow kits are not video witnessed, and so will not be valid for USA entry. Visit GOV.UK for updates
"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
