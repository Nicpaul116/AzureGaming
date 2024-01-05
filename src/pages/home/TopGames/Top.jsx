import React from "react";
import "./top.css";
import { topgames } from "./topgames";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="topgames-wrap">
      <div className="topgames-all">
        <h4>Top Games</h4>
        <div className="topgames-head-info">
          <h2>Most Played</h2>
          <button>
            <Link to="/games">View all</Link>
          </button>
        </div>
        <div className="top-details">
          {topgames.map((top) => {
            return (
              <div className="top-all">
                <div className="top-wrap">
                  <img src={top.image} alt={top.name} />
                  <div className="top-info">
                    <p>{top.genre}</p>
                    <h3>{top.name}</h3>
                    <button>{top.button}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
