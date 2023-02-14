import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Mobile1 from "./mobile/Rectangle 51.png";
import Mobile2 from "./mobile/Rectangle 52.png";
import Mobile3 from "./mobile/Rectangle 53.png";
import Mobile4 from "./mobile/Rectangle 54.png";

import "./Styles.css";

const Sobrenos = () => {
  return (
    <div>
      <Header back="#de4563" />
      <div className="main-sobrenos">
        <div className="main-sobrenos-text">
          <h2>Sobre Nós:</h2>
          <p>
             
          </p>
        </div>
        <div className="main-sobrenos-img">
          <div className="img-alinhar">
            <img src={Mobile1} />

            <img src={Mobile2} />

            <img src={Mobile3} />

            <img src={Mobile4} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sobrenos;
