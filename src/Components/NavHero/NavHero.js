import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavHero.scss";
import NavHeroRadius from "../NavHeroRadius/NavHeroRadius";

function NavHero() {
  const location = useLocation();

  const LinkStyles = ({ isActive }) => {
    return {
      opacity: isActive ? "1" : "",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div
      className={`NavHero ${
        location.pathname === "/" ? "bg-[#BAE0C8]" : "bg-white"
      }`}
    >
      <div className="max-w-[1226px] mx-auto pt-[30px]">
        <div className="flex items-center justify-between NavHero__wrapper">
          <div className="flex items-center gap-[100px] NavHero__wrap px-2">
            <Link
              to={"/"}
              className="font-semibold font-[Inter] text-[32px] NavHero__caption"
            >
              LOGO
            </Link>
            <div className="flex items-center gap-[26px] NavHero__link_wrap">
              <NavLink
                to={"/"}
                className="text-[16px] font-normal opacity-40 NavHero__link"
                style={LinkStyles}
              >
                Bosh sahifa
              </NavLink>
              <NavLink
                to={"/Mahsulotlar"}
                className="text-[16px] font-normal opacity-40 NavHero__link"
                style={LinkStyles}
              >
                Mahsulotlar
              </NavLink>
            </div>
          </div>
          <NavHeroRadius />
        </div>
      </div>
    </div>
  );
}

export default NavHero;
