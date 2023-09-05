import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav className="tw-relative tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-px-2 tw-py-3 tw-bg-slate-500">
      <ul className="tw-list-none tw-flex tw-flex-wrap">
        <li>
          <Link className="tw-no-underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="tw-no-underline" to="/street-portfolio">
            Street & Urban
          </Link>
        </li>
        <li>
          <Link className="tw-no-underline" to="/wild-life-portfolio">
            Wild Life
          </Link>
        </li>
        <li>
          <Link className="tw-no-underline" to="/nature-forest-portfolio">
            Nature & Forest
          </Link>
        </li>
        <li>
          <Link className="tw-no-underline" to="/landscape-portfolio">
            Landscapes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
