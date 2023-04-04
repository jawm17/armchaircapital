import React, { useEffect, useState } from "react";
import FallingEmoji from "./FallingEmojis";
import stars from "./stars.png";
import coin from "./coin.jpg";
import './App.css';

function App() {
  const [contacting, setContacting] = useState(false);

  function scroll() {
    document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    document.getElementById("menu").style.width = "130px";
    document.getElementById("menuClosed").style.display = "none";
    document.getElementById("menuClosed").style.opacity = "0%";
  }, [contacting]);

  function openMenu() {
    if (document.getElementById("menuClosed").style.display == "none") {
      document.getElementById("menu").style.width = "400px";
      document.getElementById("menuOpen").style.display = "none";
      // document.getElementById("menuOpen").style.opacity = "0%";
      setTimeout(() => {
        document.getElementById("menuClosed").style.display = "flex";
      }, 50);
      setTimeout(() => {
        document.getElementById("menuClosed").style.opacity = "100%";
      }, 100);
    }
  }

  function closeMenu() {
    document.getElementById("menuOpen").style.display = "flex";
    document.getElementById("menu").style.width = "130px";
    document.getElementById("menuClosed").style.display = "none";
    document.getElementById("menuClosed").style.opacity = "0%";
  }

  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  return (
    <div id="area">
      {/* <FallingEmoji element={"appHome"}/> */}
      <div className="menuTab" id="blueMenu">

      </div>
      <div className="menuTab" id="yellowMenu">

      </div>
      <div className="menuTab" id="blackMenu">

      </div>
      <div className="menuTab" id="greenMenu">

      </div>
      <div className="App" id="appHome">
        <div id="menu">
          <div id="menuClosed">
            <div>📞</div><div id="phone">512-784-8431</div><div>📫</div><div id="email">jawm17@gmail.com</div>
            <div id="closeMenuBtn" onClick={() => closeMenu()}>❌</div>
          </div>
          <div id="menuOpen" onClick={() => openMenu()}>
            <div>📞</div><div id="contactLabel">contact</div>
          </div>
        </div>
        <div className="heroText">
          Armchair Capital is investing in cool companies
        </div>
      </div>
      <div id="portfolio">
        <nav id="tabs" onClick={() => scroll()}>
          <div class="folder-tab selected">
            <span>portfolio</span>
          </div>
        </nav>
        <div id="portfolioTitle">
          Our Investments
        </div>
        <div className="centerCompany">
          <div>
            <div onClick={() => window.open('https://www.dobscoin.com', '_blank')} className="companyImg" id="companyImgBg"><img id="dobsFace" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7188.png?alt=media&token=1f1ced11-33b6-4a75-bdb9-2f1d0a93e71e"></img></div>
            <div onClick={() => window.open('https://www.dobscoin.com', '_blank')} className="companyName">
              dobscoin
            </div>
            <div onClick={() => window.open('https://www.dobscoin.com', '_blank')} className="companyUrl">
              dobscoin.com
            </div>
          </div>
        </div>
        <div className="centerCompany">
          <div>
            <div onClick={() => window.open('https://www.ethergames.com', '_blank')} className="companyImg" id="companyImgBgGames"><img id="ethergames" src={coin}></img></div>
            <div onClick={() => window.open('https://www.ethergames.com', '_blank')} className="companyName">
              ethergames
            </div>
            <div onClick={() => window.open('https://www.ethergames.com', '_blank')} className="companyUrl">
              ethergames.com
            </div>
          </div>
        </div>
        <div className="centerCompany">
          <div>
            <img onClick={() => window.open('https://www.venue.market', '_blank')} className="companyImg" src={stars}></img>
            <div onClick={() => window.open('https://www.venue.market', '_blank')} className="companyName">
              venue
            </div>
            <div onClick={() => window.open('https://www.venue.market', '_blank')} className="companyUrl">
              venue.market
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
