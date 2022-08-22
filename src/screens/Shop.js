
import React, { useState } from "react";
import ShopCard from "./components/ShopCard";
import bg from "../assets/bg.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";

function FilterBtn({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "search__result__container__select__box___btn search__result__container__select__box___btn__select"
          : "search__result__container__select__box___btn"
      }
    >
      {title}
    </button>
  );
}

function RangeInput() {
  const [value, onChange] = useState(1);
  return (
    <div className="search__result__container__vacancies-filter-panel-input-range">
      <input
        type="range"
        className="search__result__container__vacancies-filter-panel-input-range-input"
        min="1"
        max="30"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <div className="search__result__container__vacancies-filter-panel-input-range-buble">
        {value} km
      </div>
    </div>
  );
}

export default function Shop() {
  const [isDistance, setIsDistance] = useState(false);
  const [select, setSelect] = useState("Travel Bags");

  const DistanceEntry = [
    {
      title: "140 km",
    },
    {
      title: "200 km",
    },
    {
      title: "280 km",
    },
  ];
  return (
    <>
      <Header />
      <Container className="shop_container">
      <form className="search__result__container__vacancies-filter-panel d-none d-md-block col-4">
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-heading">
              Filter
            </div>
            <button
              type="reset"
              className="search__result__container__vacancies-filter-panel-heading-row-btn"
            >
              Remove all
            </button>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-sub-heading">
              Category
            </div>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <input
              type="text"
              placeholder="Search Category"
              className="search__result__container__vacancies-filter-panel-input"
            />
          </div>
          {/* <div className="search__result__container__vacancies-filter-panel-row">
            <RangeInput />
          </div> */}
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-info">
              Max 30 Kilometres
            </div>
          </div>
          <div className="search__result__container__select__box">
            <FilterBtn
              title="Travel Bags"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn
              title="Accessories"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn title="Journals" select={select} setSelect={setSelect} />
            <FilterBtn title="Maps" select={select} setSelect={setSelect} />
            <FilterBtn
              title="Gift Cards
"
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="search__result__container__vacancies-filter-panel-catagory">
            <div className="search__result__container__vacancies-filter-panel-catagory-container">
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-6"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-6">Travel Bags</label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-7"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-7">Gift Cards</label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-8"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-8">Maps</label>

              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-10"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-10">Journals</label>
            </div>
          </div>
        </form>
        <div className="col-12 col-md-8">
          <div className="shop_items d-flex">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
          <div className="search__job__container__searches__content__right__bottom">
            <button className="search__job__container__searches__content__right__btn">
              Load More
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
