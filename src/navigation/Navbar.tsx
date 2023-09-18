import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  let location = useLocation();
  return (
    <nav className="tw-relative tw-flex tw-flex-wrap tw-items-center tw-px-2 tw-pt-4 tw-pb-1 tw-bg-primary">
      <div className="tw-px-2 tw-pb-3 ">
        <img
          src={require("../assets/Logo Wasserzeichen Weiß Logo Links.png")}
          alt=""
          style={{ height: "100%", width: "300px", display: "inline-flex" }}
        />
      </div>

      <ul className="tw-list-none tw-flex tw-flex-wrap tw-space-x-6 tw-mt-1">
        <li>
          <Link
            className={`${
              location.pathname === "/" ? "active" : ""
            } tw-no-underline tw-text-tertiary nav-link-hover`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/street-portfolio" ? "active" : ""
            } tw-no-underline tw-text-tertiary nav-link-hover`}
            to="/street-portfolio"
          >
            Street & Urban
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/wild-life-portfolio" ? "active" : ""
            } tw-no-underline tw-text-tertiary nav-link-hover`}
            to="/wild-life-portfolio"
          >
            Wild Life
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/nature-forest-portfolio" ? "active" : ""
            } tw-no-underline tw-text-tertiary nav-link-hover`}
            to="/nature-forest-portfolio"
          >
            Nature & Forest
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/landscape-portfolio" ? "active" : ""
            } tw-no-underline tw-text-tertiary nav-link-hover`}
            to="/landscape-portfolio"
          >
            Landscapes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
