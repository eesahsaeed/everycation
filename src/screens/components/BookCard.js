import React from "react";

export default function BookCard({ img, title, para }) {
  return (
    <div className="main__container__book__overlay__content__card">
      <img
        src={img}
        alt="img"
        className="main__container__book__overlay__content__card__img"
      />
      <div className="main__container__book__overlay__content__card__heading">
        {title}
      </div>
      <div className="main__container__book__overlay__content__card__sub__heading">
        {para}
      </div>
    </div>
  );
}
