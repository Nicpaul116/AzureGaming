import React from "react";
import "./head.css";
import img1 from "../../../assets/featured-01.png";
import img2 from "../../../assets/featured-02.png";
import img3 from "../../../assets/featured-03.png";
import img4 from "../../../assets/featured-04.png";

const Head = () => {
  return (
    <div>
      <div className="header-all">
        <div className="Header-wrap">
          <div className="header-content">
            <h4>
              <b>WELCOME TO AZUREGAMING</b>
            </h4>
            <h2>
              <b>BEST GAMING SITE YOU CAN FIND</b>
            </h2>
            <p>
              AzureGaming is a free website for games. You can find any game you
              want
            </p>
          </div>
          <div className="price">
            <h3>$40</h3>
            <h2>-50%</h2>
          </div>
        </div>
        <div className="home-icons">
          <div className="home-icons-wrap">
            <div className="home-icon">
              <div className="home-img">
                <img src={img1} alt="img2" />
              </div>
              <h3>Fast Download</h3>
            </div>
            <div className="home-icon">
              <div className="home-img">
                <img src={img2} alt="img2" />
              </div>
              <h3>User Guide</h3>
            </div>
            <div className="home-icon">
              <div className="home-img">
                <img src={img3} alt="img3" />
              </div>
              <h3>Replay</h3>
            </div>
            <div className="home-icon">
              <div className="home-img">
                <img src={img4} alt="img4" />
              </div>
              <h3>Easy Layout</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
