import React from "react";
import { Link } from "react-router-dom";
import shop_product from "../../assets/shop_product.png";

export default function ShopCard() {
  return (
    <Link
      to="/product-details"
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
      <div className="main__container__shop__content__card__btn__price__position">
        <button
          style={{
            color: "#242424",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          }}
          className="main__container__shop__content__card__btn__price"
        >
          $56
        </button>
      </div>
    </Link>
  );
}
