import React from "react";
import FooterIcon from "../FooterIcon/FooterIcon";
import FooterText from "../FooterText/FooterText";
import googlePlay from "../../Assets/Images/googlePlay.svg";
import appStore from "../../Assets/Images/AppStore.svg";
import Home from "../../Assets/Images/homeBlack.svg";
import FooterGreen from "../FooterGreen/FooterGreen";
import { NavLink } from "react-router-dom";

function Footer() {
  const LinkStyles = ({isActive}) => {
    return {
      opacity: isActive ? "1" : "",
      fontWeight: isActive ? "bold" : "normal",
    }
  }
  return (
    <div className="Footer relative">
      <div className="bg-[#282828] pt-[40px]">
        <div className="max-w-[1226px] mx-auto">
          <h2 className="text-[32px] font-semibold text-white font-[Inter]">
            LOGO
          </h2>
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-[18px]">
              <p className="font-normal text-[16px] text-white opacity-80 max-w-[320px] leading-7">
                Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
              </p>
              <p className="font-semibold text-[16px] text-white opacity-80">
                Ish vaqti: Har kuni 8:00 dan 18:00 gacha
              </p>
              <FooterIcon />
            </div>
            <FooterText caption={"Huquqiy"} />
            <div>
              <h2 className="text-[#F4F5F7] text-[18px] font-medium">
                Ilovani yuklab olish
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                <img src={googlePlay} alt="googlePlay" />
                <img src={appStore} alt="appStore" />
              </div>
            </div>
          </div>
          <div className="flex items-end relative">
            <FooterGreen />
            <img src={Home} alt="Home" className="h-[127px] min-w-[200px] absolute right-[-150px]"/>
          </div>
        </div>
      </div>
      <div className="max-w-[1226px] mx-auto py-[22px] flex items-center justify-between">
        <p className="font-normal text-[12px] text-black leading-[18px] max-w-[520px]">
          © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. <br />
          Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola
          qilish majburiy.
        </p>
        <div className="flex items-center justify-between gap-7">
          <NavLink to={"/"} className="font-medium text-[#282938] text-[14px]" style={LinkStyles}>Bosh sahifa</NavLink>
          <NavLink to={"/Bizhaqimizda"} className="font-medium text-[#282938] text-[14px]" style={LinkStyles}>Biz haqimizda</NavLink>
          <NavLink to={"/Yangiliklar"} className="font-medium text-[#282938] text-[14px]" style={LinkStyles}>Yangiliklar</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
