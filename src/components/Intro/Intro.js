import React, {useState} from "react";
import { Link } from "react-scroll";

import "./Intro.scss";

const Intro = () => {

  const [click, setClick ] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="main_intro">
      <div className="intro">
        <div className="intro_first">
          <p>
            W trosce o zdrowie Państwa
            zwierzaków, oferuję wszechstronną 
            pomoc w leczeniu problemów
            stomatologicznych psów i kotów.
          </p>

          <Link onClick={handleClick}
                to="lecznice"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-90}
                isDynamic={true}
              >
                <button className="header_button">
                  umów wizytę
                </button>
              </Link>
        </div>

        <div className="intro_text">
          <p>
          Oferuję profesjonalne weterynaryjne usługi stomatologiczne, a także indywidualną pomoc w zapewnieniu właściwej opieki stomatologicznej, chirurgicznej oraz onkologicznej w jamie ustnej. Udzielam porad dotyczących odpowiedniej higieny jamy ustnej Państwa zwierząt oraz standardów dbałości o ogólny stan ich zdrowia. <br/> <br/>
          Wykorzystując własną wiedzę i doświadczenie, a także najwyższej jakości sprzęt, wraz zespołem anestezjologów, onkologów i pielęgniarzy, jestem w stanie skutecznie nieść pomoc w niemalże każdym przypadku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
