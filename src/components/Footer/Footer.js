import React from "react";
import Iframe from "react-iframe";

// import photo_ala from "../../assets/img/stomatologia_img7777.jpg";
// import photo_ala from "../../assets/img/stomatologia_img2HD.jpg";
import photo_dermawet from "../../assets/img/stomatologia_img3.JPG";
import photo_vetcare from "../../assets/img/stomatologia_img4.JPG";
import photo_elwet from "../../assets/img/stomatologia_img6.JPG";

import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="footer" id="kontakt">

      <div className="footer-main">
        <p className="footer-heading">kontakt</p>
      </div>

      <div id="lecznice">
        <ul>
          <li className="first-clinic">
            <img className="photo_dermawet" src={photo_dermawet} alt="" />
 
            <div className="footer_dermawet">
              <h2>Mokotów</h2>
              <h3>Przychodnia Dermawet</h3>
              <p>ul. Odyńca 37, Warszawa</p>
              <label htmlFor="phone">tel.: </label>
              <a href="tel:228540261">22 854 02 61</a>
              <p>
                {/* Link do kalendarza z możliwością rezerwacji wizyty:{" "}
                <a
                  href="https://dermawet.com/rezerwacja-wizyt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dermawet.com/rezerwacja-wizyt
                </a>  */}
              </p>
            </div>

            <div className="footer_dermawet-frame">
              <Iframe
                className="frame"
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"

                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.5935835597047!2d21.01459021566863!3d52.19625977975429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd2bdd244119%3A0xeed81f86965ccf6c!2sDermawet!5e0!3m2!1spl!2spl!4v1604333430160!5m2!1spl!2spl"
              />
            </div>
          </li>

          <li className="second-clinic">
            <img className="photo_vetcare" src={photo_vetcare} alt="" />

            <div className="footer_vetcare">
              <h2>Pruszków</h2>
              <h3>Centrum Weterynaryjne Vet Care</h3>
              <p>ul. Majowa 3, Pruszków</p>
              <label htmlFor="phone">tel.: </label>
              <a href="tel:724002405">724 002 405</a>
            </div>

            <div className="footer_vetcare-frame">
              <Iframe
                className="frame"
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"

                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.9873428020373!2d20.808885315667624!3d52.17092357974961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935913c427d77%3A0xc581d5ad437de963!2sPrzychodnia%20weterynaryjna%20Vet%20Care!5e0!3m2!1spl!2spl!4v1604333523147!5m2!1spl!2spl"
              />
            </div>
          </li>

          <li className="third-clinic">
            <img className="photo_elwet" src={photo_elwet} alt="" />

            <div className="footer_elwet">
              <h2>Mokotów</h2>
              <h3>Klinika Weterynaryjna Elwet</h3>
              <p>Al. Niepodległości 24/30, Warszawa</p>
              <label htmlFor="phone">tel.: </label>
              <a href="tel:228432346">22 843 23 46</a>
              <p>
                Link do kalendarza z możliwością rezerwacji wizyty:{" "}
                <a
                  href="https://www.elwet.pl/rezerwacja-wizyt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://www.elwet.pl/rezerwacja-wizyt
                </a>
              </p>
            </div>

            <div className="footer_elwet-frame">
              <Iframe
                className="frame"
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"

                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.138701916727!2d21.017105915668203!3d52.18635147975238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d3de786f0f%3A0xfbc2341606af79d2!2sKlinika%20Weterynaryjna%20ELWET%2024H!5e0!3m2!1spl!2spl!4v1604333067533!5m2!1spl!2spl"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="contact">
        <p className="footer-1">Kontakt <strong> tylko </strong> w pilnych przypadkach.</p>

          <label className="footer-3th" htmlFor="phone">Telefon: {" "}
          <a href="tel:784073932">784&nbsp;073&nbsp;932</a>
          </label>
              
          <p className="footer-4rd">
            Adres e-mail:{" "}
            <a href="mailto:stomatologiazwierzat@gmail.com">
              stomatologiazwierzat@gmail.com
            </a>
          </p>
      </div>

      <div className="rights">
           <p>© 2021 Stomatologia zwierząt Alicja Gajosz. Wszelkie prawa zastrzeżone. </p>
          </div>
      


      {/* <div className="footer-main">
        <p className="footer-heading">kontakt</p>
        <p className="footer-first">W celu umówienia się na wizytę, </p> <br />
        <p className="footer-2nd">
          zapraszam do kontaktu z jedną z poniższych lecznic.{" "}
        </p>
        <img className="photo_ala" src={photo_ala} alt="" />
        <p className="footer-3rd">
          Kontakt mailowy:{" "}
          <a href="mailto:stomatologiazwierzat@gmail.com">
            stomatologiazwierzat@gmail.com
          </a>
        </p>
        <p className="footer-4th">
          w <span>pilnych</span> przypadkach, proszę o&nbsp;kontakt pod numerem:{" "}
          <strong>784&nbsp;073&nbsp;932</strong>.
        </p>
      </div> */}

    </div>
  );
};

export default Footer;
