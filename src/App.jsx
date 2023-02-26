import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import Hero from "../src/assets/images/illustration-hero.svg";
import Music from "../src/assets/images/icon-music.svg";
import DesktopPattern from "../src/assets/images/pattern-background-desktop.svg";
import MobilePattern from "../src/assets/images/pattern-background-mobile.svg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__top">
          <img src={Hero} alt="React Logo" className="card__topImage" />
        </div>
        <div className="card__bottom">
          <h2 className="card__bottomTitle">Order Summary</h2>
          <p className="card__bottomSubtitle">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="card__bottomSubscriptionWrapper">
            <div className="card__bottomSubscriptionLeft">
              <img
                src={Music}
                alt="music icon"
                height={48}
                width={48}
                className="card__bottomSubscriptionIcon"
              />
              <div className="card__bottomSubscriptionStack">
                <p className="card__bottomSubscriptionStackTitle">
                  Annual Plan
                </p>
                <p className="card__bottomSubscriptionStackPrice">
                  $59.99/year
                </p>
              </div>
            </div>

            <div className="card__bottomSubscriptionRight">
              <p className="card__bottomSubscriptionRightLink">Change</p>
            </div>
          </div>

          <div className="card__bottomBtnWrapper">
            <a href="#primary" className="card__primaryBtn">
              Proceed to Payment
            </a>
            <a href="#secondary" className="card__secondaryBtn">
              Cancel Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
