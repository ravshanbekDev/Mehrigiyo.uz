import React from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "../Language/Language";
import language from "../../Assets/Images/location.svg";
import user from "../../Assets/Images/AddUser.svg";
import NavHero from "../NavHero/NavHero";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`NavHero ${
        location.pathname === "/" ? "bg-[#DBEFE3]" : "bg-white"
      }`}
    >
      <div className="max-w-[1226px] mx-auto py-[10px] flex items-center justify-between px-2">
        <div className="flex items-center justify-between gap-5">
          <Link className="text-[#505050] text-[12px] font-normal">
            Mahsulotlar katalogi
          </Link>
          <Link className="text-[#505050] text-[12px] font-normal">
            Foto-lavhalar
          </Link>
          <Link className="text-[#505050] text-[12px] font-normal">
            Yetkazib berish va to'lash
          </Link>
          <Link className="text-[#AB7A19] text-[12px] font-normal">Aksiya</Link>
          <Link className="text-[#53B175] text-[12px] font-normal">Yangi</Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Link className="text-[14px] font-normal flex items-center gap-[10px] border-l pl-[16px]">
            Toshkent shahar <img src={language} alt="location" />
          </Link>
          <Link className="text-[14px] font-normal flex items-center gap-[10px] border-l pl-[16px]">
            Kirish <img src={user} alt="user img" />
          </Link>
        </div>
      </div>
      <NavHero />
    </nav>
  );
}

export default Navbar;
