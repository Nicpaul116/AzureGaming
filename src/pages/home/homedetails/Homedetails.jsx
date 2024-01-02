import React from "react";
import "./homedetails.css";
import image1 from "../../../assets/597965.jpg";
import image2 from "../../../assets/cyberpunk-2077-3840x2160-13543.jpg";
import image3 from "../../../assets/ghost-of-tsushima-4320x3456-12072.jpg";
import image4 from "../../../assets/wallpaperflare.com_wallpaper.jpg";
import { IoBagHandle } from "react-icons/io5";

const Homedetails = () => {
  return (
    <div className="details-wrap">
      <h4>Trending</h4>
      <div className="details-top">
        <h2>Trending Games</h2>
        <button>View all</button>
      </div>
      <div className="trend-wrap">
        <div className="trend1">
          <div className="trend1-wrap">
            <div className="trend-img">
              <img src={image1} alt="#" />
              <span>$25</span>
            </div>
            <div>
              <div className="trend-details">
                <p>Shooting</p>
                <div className="trend-info">
                  <h3>COD Blacks Ops 3</h3>
                  <div className="trend-icon">
                    <i>
                      <IoBagHandle />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trend2">
          <div className="trend2-wrap">
            <div className="trend-img">
              <img src={image2} alt="#" />
              <span>$25</span>
            </div>
            <p>Shooting</p>
            <div className="trend-info">
              <h3>CyberPunk-2077</h3>
              <div className="trend-icon">
                <i>
                  <IoBagHandle />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="trend3">
          <div className="trend3-wrap">
            <div className="trend-img">
              <img src={image3} alt="#" />
              <span>$25</span>
            </div>
            <p>Action</p>
            <div className="trend-info">
              <h3>Ghost of Tsushima</h3>
              <div className="trend-icon">
                <i>
                  <IoBagHandle />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="trend4">
          <div className="trend4-wrap">
            <div className="trend-img">
              <img src={image4} alt="#" />
              <span>$25</span>
            </div>
            <p>Fighting</p>
            <div className="trend-info">
              <h3>Mortal Kombat 11</h3>
              <div className="trend-icon">
                <i>
                  <IoBagHandle />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedetails;
