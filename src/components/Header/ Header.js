import React, {useState} from "react";
import { Link } from "react-scroll";

import header_photo from "../../assets/img/stomatologia_img55.jpg";

import "./Header.scss";

const Header = () => {

  const [click, setClick ] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <div className="header_main" id="strona_glowna">
        <div className="header_section">
          <div className="header_container">
            <div className="section_image photo">
              <img src={header_photo} alt="main" />
            </div>
          </div>
        </div>

        <div className="navbar-content-main">
          <div className="navbar-content">
            <h1 className="navbar-inner">Stomatologia zwierząt</h1>
            <p className="border"></p>
            <p className="navbar-text-one">
              Profesjonalna opieka weterynaryjna
            </p>

            <p className="navbar-text-two">
              Oferuję możliwość wizyt konsultacyjnych oraz pełną gamę
              weterynaryjnych usług stomatologicznych.
            </p>

            <p className="navbar-text-three">lek. wet. Alicja Gajosz</p>

            <Link onClick={handleClick}
                to="uslugi"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-80}
                isDynamic={true}
              >
                <button className="header_button">
                zobacz więcej
                </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
