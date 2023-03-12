import React from "react";
import home from "../../Assets/Images/home.png";
import Home from "../../Assets/Images/homeBlack.svg";
import Bubles from "../../Assets/Images/bubles.png";
import "./NavBubles.scss";

function NavBubles() {
  return (
    <div className="bg-[#3C3C3C] max-w-[1256px] mx-auto rounded-[25px] pt-[50px] px-[40px] mt-[180px] mb-[140px] NavBubles">
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-[30px] text-white">
          Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
        </h2>
        <img src={home} alt="home" />
      </div>
      <img src={Home} alt="home" />
      <img src={Bubles} alt="bubles" className="NavBubles__img"/>
    </div>
  );
}

export default NavBubles;
