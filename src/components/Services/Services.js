import React from "react";

import "./Services.scss";

const Services = () => {
  return (
    <div className="services" id="uslugi">

      <div className="services-main">
        <p className="services-heading">Usługi</p>
      </div>

      <div className="main_services">
          <ul className="container_services">
            <li>
              <i className="fas fa-paw"></i>
              <p>Chirurgia twarzowo-szczękowa</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Ortodoncja, leczenie wad zgryzu</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Ekstrakcja, usuwanie zębów</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Endodoncja, leczenie kanałowe</p>
            </li>
            <li>
              <i className="fas fa-paw"></i>
              <p>Onkologia, leczenie nowotworów jamy ustnej</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Usuwanie kamienia nazębnego metodą ultradźwiękową</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Polerowanie zębów</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>RTG stomatologiczne</p>
            </li>

            <li>
              <i className="fas fa-paw"></i>
              <p>Leczenie choroby przyzębia</p>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Services;
