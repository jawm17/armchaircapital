import React, { useEffect, useState } from "react";
import FallingEmoji from "./FallingEmojis";
import './App.css';

function App() {
  const [contacting, setContacting] = useState(false);

  function scroll() {
    document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (contacting) {
      document.getElementById("menu").style.width = "400px";
      // document.getElementById("menuOpen").style.opacity = "0%";
      setTimeout(() => {
        document.getElementById("menuClosed").style.display = "flex";
      }, 50);
      setTimeout(() => {
        document.getElementById("menuClosed").style.opacity = "100%";
      }, 100);
    } else {
      if(document.getElementById("menuClosed")) {
        document.getElementById("menu").style.width = "130px";
        document.getElementById("menuClosed").style.display = "none";
        document.getElementById("menuClosed").style.opacity = "0%";
      }
    }
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

  return (
    <div id="area">
      <FallingEmoji element={"appHome"}/>
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
          Armchair Capital is looking for great companies
        </div>
      </div>
      <div id="portfolio" onClick={() => scroll()}>
        <nav id="tabs">
          <div class="folder-tab selected">
            <span>portfolio</span>
          </div>
          {/* <div class="folder-tab" id="folderTab2">
            <span>about</span>
          </div>
          <div class="folder-tab" id="folderTab3">
            <span>team</span>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default App;
