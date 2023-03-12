import React from "react";
import facebook from "../../Assets/Images/facebook.svg";
import instagram from "../../Assets/Images/instagram.svg";
import telegram from "../../Assets/Images/telegram.svg";
import youtube from "../../Assets/Images/youtube.svg";

function FooterIcon() {
  return (
    <div className="flex items-center gap-6">
      <div className="w-8 h-8 bg-[#3D3D3D] rounded-[50%] flex items-center justify-center">
        <img src={facebook} alt="facebook"/>
      </div>
      <div className="w-8 h-8 bg-[#3D3D3D] rounded-[50%] flex items-center justify-center">
        <img src={instagram} alt="instagram"/>
      </div>
      <div className="w-8 h-8 bg-[#3D3D3D] rounded-[50%] flex items-center justify-center">
        <img src={telegram} alt="telegram"/>
      </div>
      <div className="w-8 h-8 bg-[#3D3D3D] rounded-[50%] flex items-center justify-center">
        <img src={youtube} alt="youtube"/>
      </div>
    </div>
  );
}

export default FooterIcon;
