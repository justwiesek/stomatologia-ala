import React, { useState, useEffect } from "react";

import "./About.scss";

import dyplom1 from "../../assets/img/dyplom1.png";
import dyplom2 from "../../assets/img/dyplom3.png";
import dyplom3 from "../../assets/img/dyplom4.jpeg";

const About = (props) => {
  const [isFirstActive, setisFirstActive] = useState(false);
  const [isSecondActive, setisSecondActive] = useState(false);
  const [isThirdActive, setisThirdActive] = useState(false);

  const handleFirstClick = () => setisFirstActive(!isFirstActive);
  const handleSecondClick = () => setisSecondActive(!isSecondActive);
  const handleThirdClick = () => setisThirdActive(!isThirdActive);

  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      event.preventDefault();
      setisFirstActive(false);
      setisSecondActive(false);
      setisThirdActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="section-main" id="o_mnie">
      <div className="about-main">
        <p className="about-heading">o mnie</p>
      </div>

      <div className="section">
        <div className="section_text">
          <p>
            Ukończyłam Wydział Medycyny Weterynaryjnej w Warszawie. Jestem
            członkiem EVDS European Veterinary Dental Society (organizacji
            skupiającej najlepszych lekarzy w Europie, zajmujących się
            stomatologią weterynaryjną).
            <br /> <br />
            Uczestniczyłam w kilkudziesięciu kursach, kongresach oraz stażach
            stomatologicznych, w Polce i wielu krajach Europy, cały czas
            poszerzam swoją wiedzę i doświadczenie w tym zakresie. Wszystko po
            to, aby zapewnić Waszym podopiecznym opiekę stomatologiczną na
            najlepszym, światowym poziomie. Praca jest jednocześnie moją
            największą pasją, a priorytetem zdrowie i komfort Waszych
            czworonożnych przyjaciół.
          </p>
        </div>

        <div className="section_images" onKeyDown={handleEsc}>
          <ul>
            <li>
              <img onClick={handleThirdClick} src={dyplom3} alt="" />
              {setisThirdActive && (
                <img
                  onClick={handleThirdClick}
                  className={isThirdActive ? "image active" : "image"}
                  src={dyplom3}
                  alt="zdjęcie dyplomu"
                />
              )}
            </li>

            <li>
              <img onClick={handleFirstClick} src={dyplom1} alt="" />
              {setisFirstActive && (
                <img
                  onClick={handleFirstClick}
                  className={isFirstActive ? "image active" : "image"}
                  src={dyplom1}
                  alt="zdjęcie dyplomu"
                />
              )}
            </li>

            <li>
              <img onClick={handleSecondClick} src={dyplom2} alt="" />
              {setisSecondActive && (
                <img
                  onClick={handleSecondClick}
                  className={isSecondActive ? "image active" : "image"}
                  src={dyplom2}
                  alt="zdjęcie dyplomu"
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
