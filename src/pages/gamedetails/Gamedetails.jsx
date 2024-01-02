import React, { useState } from "react";
import nfs from "../../assets/nfs.jpeg";
import { IoBagHandle } from "react-icons/io5";
import "./gamedetails.css";
import { related } from "./related";

const Gamedetails = () => {
  const [showpara, setshowpara] = useState(
    "Need for Speed Unbound is a racing game set in a fictional city called Lakeshore City, which is based on Chicago. It features an open world environment and gameplay similar to that of previous entries in the series, being mainly focused around street racing. The heat system from Need for Speed Heat returns in Unbound, where the player attempts to gain notoriety among the police. Additionally, the game features various forms of customization such as installing various body kits, adding a splitter, and even completely removing the front or rear bumpers."
  );

  const reset = () => {
    setshowpara(
      "Need for Speed Unbound is a racing game set in a fictional city called Lakeshore City, which is based on Chicago. It features an open world environment and gameplay similar to that of previous entries in the series, being mainly focused around street racing. The heat system from Need for Speed Heat returns in Unbound, where the player attempts to gain notoriety among the police. Additionally, the game features various forms of customization such as installing various body kits, adding a splitter, and even completely removing the front or rear bumpers."
    );
  };

  const set = () => {
    setshowpara(
      "2022 was a stacked year that featured indie darlings (Immortality), blockbusters (God of War Ragnarok), and smaller, surprise hits (Marvel Snap), so it shouldn't be a shock that a game or two slipped under your radar. But the biggest blink-and-you-miss-it release might be late November's Need for Speed Unbound, the latest entry in EA’s long-running street racing series. With Criterion Games (of Burnout fame) at the helm, Unbound had the potential to be one of the best racing games of the year—or a return to series form after a few missteps. But while aesthetically pleasing and featuring cross-platform play with PlayStation 5 and Xbox Series X/S, the $69.99 PC game lacks satisfactory car handling and a thriving, in-game world."
    );
  };
  return (
    <div className="gamedetails-all">
      <div className="gamedetails-header">
        <h1>Need For Speed Unbound</h1>
      </div>
      <div className="gamedetails-info">
        <div className="img-wrap">
          <img src={nfs} alt="nfs" />
        </div>
        <div className="gamedetails-info1">
          <h3>Need For Speed Unbound</h3>
          <h2>$40</h2>
          <p>
            AZURE Gaming gives you ultimate discount to your favourite games .
            This game brings high quality driving and fun. Feel free to contact
            us if there issues. Thank you.
          </p>
          <form action="">
            <input type="text" name="number" placeholder="1" />
            <button>
              <i>
                <IoBagHandle />
              </i>
              Add to cart
            </button>
          </form>
          <div className="gamedetails-info2">
            <p>Game ID: NFS Unbound</p>
            <p>Genre: Sports, Racing, SP</p>
            <p>Multi-tags: Challenge, Speed, Rumble</p>
          </div>
        </div>
      </div>
      <div className="gamedetails-info3">
        <div className="info3-buttons">
          <ul>
            <li className="list1">
              <button onClick={reset} className="active">
                Description
              </button>
            </li>
            <li>
              <button onClick={set}>Review</button>
            </li>
          </ul>
          <div className="info3-paragraph">
            <p>{showpara}</p>
          </div>
        </div>
      </div>
      <div className="info4-wrap">
        <div className="info4-head">
          <h2>Related Games</h2>
          <button>View all</button>
        </div>
        <div className="info4-relate">
          {related.map((relate, index) => {
            return (
              <div key={index} className="relate-wrap">
                <img src={relate.image} alt={relate.name} />
                <h3>{relate.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gamedetails;
