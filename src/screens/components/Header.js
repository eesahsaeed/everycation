import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Home.scss";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          isScrolling: true,
        });
      } else if (window.scrollY === 0) {
        this.setState({
          isScrolling: false,
        });
      }
    });
    window.addEventListener("resize", () => {
      this.setState({
        isHeaderOpen: window.innerWidth > 1000,
      });
    });
  }
  render() {
    return (
      <div
        className={this.state.isScrolling ? "header header__active" : "header"}
      >
        <div className="header__wrapper">
          <Link
            to="/"
            className="header__logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="logo" className="main__logo" />
          </Link>
          <button
            className="menu__btn"
            onClick={() => {
              if (!this.state.isHeaderOpen) {
                this.setState({
                  isHeaderOpen: true,
                });
              } else {
                this.setState({
                  isHeaderOpen: false,
                });
              }
            }}
          >
            {this.state.isHeaderOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          {this.state.isHeaderOpen ? (
            <div
              className={
                this.state.isScrolling && this.state.isHeaderOpen
                  ? "header__nav header__nav__active"
                  : "header__nav"
              }
            >
              <a
                href="#home"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </a>
              {/* <Link to="/co-founder" className="nav__header__link">
                Co-founder
              </Link> */}
              <a
                href="#flight"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Flights
              </a>
              <a
                href="#browse"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Hotels
              </a>
              <a
                href="#book"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Travel Wallet
              </a>
              <a
                href="#journal"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Travel Journal
              </a>
              <Link
                to="/shop"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Travel Shop
              </Link>
              <a
                href="#covid"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Covid-19 Tests
              </a>
              <a
                href="#contact"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
