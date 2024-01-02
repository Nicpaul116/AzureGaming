import React from "react";
import img1 from "../../../assets/wd2.jpg";
import "./end.css";

const End = () => {
  return (
    <div className="end-all">
      <div className="end-wrap">
        <div className="end-info1">
          <h5>Our Shop</h5>
          <h2>
            Go Pre-Order Buy & Get Best <span>Prices</span> For You!
          </h2>
          <p>
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt
          </p>
          <div className="end-button1">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="end-info2">
          <img src={img1} alt="#" />
        </div>
        <div className="end-info3">
          <h5>NewsLetter</h5>
          <h2>
            Get Up to $80 off Just Buy <span>Subscribe</span> Newsletter!
          </h2>
          <form className="end-form">
            <input type="text" placeholder="Your email..." />
            <button>Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default End;
