import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Venta de equipos médicos
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">
             <FontAwesomeIcon icon = {faHouse}/>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/signup">
            <FontAwesomeIcon icon = {faUser}/>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/cart" >
              <FontAwesomeIcon icon = {faCartShopping}/>
            </Link>
          </li>
        </ul>

      </div>
    </header>
  )
};

export default Header;