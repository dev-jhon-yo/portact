import { Link, NavLink } from "react-router-dom"

import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./styles.scss"


export function NavBar() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            className="home-link disabled"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/about"
            className="about-link"
          >
            About
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  )
}
