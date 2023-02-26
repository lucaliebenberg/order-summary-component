import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__top">
          <img src={reactLogo} alt="React Logo" />
        </div>
        <div className="card__bottom">
          <h2 className="card__bottomTitle">Order Summary</h2>
          <p className="card__bottomSubtitle">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="card__bottomSubscriptionWrapper">
            <img src={reactLogo} alt="" />
            <div className="card__bottomSubscriptionStack">
              <p>Annual Plan</p>
              <p>$59.99/year</p>
            </div>
            <p>Change</p>
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
