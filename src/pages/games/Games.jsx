import React, { useEffect, useState } from "react";
import { gameshop } from "./gameshop";
import "./games.css";
import { buttons } from "./gameshop";
import { Navbar } from "../../components";

const Games = () => {
  const getgenre = () => {
    const genrelist = gameshop;
    return genrelist;
  };

  const filtergenre = (genretype) => {
    let filteredgenre = getgenre().filter((type) => type.genre === genretype);
    return filteredgenre;
  };

  const [filteredgenre, setfilteredgenre] = useState(null);
  useEffect(() => {
    setfilteredgenre(getgenre());
  }, []);

  const handlegenre = (e) => {
    let typegenre = e.target.value;
    typegenre !== "Show all"
      ? setfilteredgenre(filtergenre(typegenre))
      : setfilteredgenre(getgenre());
  };

  return (
    <div className="games-wrap" id="games">
      <Navbar />
      <div className="games-header">
        <h1>Games</h1>
      </div>
      <div className="games-buttons">
        {buttons &&
          buttons.map((type, index) => (
            <>
              <button key={index} value={type.value} onClick={handlegenre}>
                {type.name}
              </button>
            </>
          ))}
      </div>
      <div className="gameshop-all">
        {filteredgenre &&
          filteredgenre.map((games) => {
            return (
              <div className="gameshop-wrap">
                <a href="/Gamedetails">
                  <div className="gameshop-img">
                    <img src={games.game} alt={games.name} />
                    <h3>{games.price}</h3>
                  </div>
                  <div className="gameshop-info">
                    <p>{games.genre}</p>
                    <h3>{games.name}</h3>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Games;
