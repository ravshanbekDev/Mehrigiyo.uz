import React from "react";
import doctor from "../../Assets/Images/doctor.svg";
import boy from "../../Assets/Images/boy.png";
import Consultant from "../../Assets/Images/consultant.svg";
import Hours from "../../Assets/Images/24-hours.svg";
import telephone from "../../Assets/Images/telephone.svg";
import massage from "../../Assets/Images/massage.svg";

import "./NavHeadCard.scss";

function NavHeadCard() {
  return (
    <div className="max-w-[836px] mx-auto">
      <div className="relative">
        <div className="NavHeadCard__box py-[19px] px-[16px] w-[188px]">
          <div className="flex items-center gap-[10px]">
            <img src={Consultant} alt="Consultant" />
            <h2 className="text-[16px] font-bold">Consultant</h2>
          </div>
          <p className="text-[10px] font-normal text-[#C3C3C3] max-w-[130px] mt-[6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper in et amet.
          </p>
        </div>
        <div className="NavHeadCard">
          <div className="flex items-start gap-1">
            <img src={doctor} alt="doctor.svg" className="w-[35px] h-[35px]" />
            <div className="flex flex-col">
              <h2 className="NavHeadCard__caption">Bahrom Sobirov</h2>
              <p className="NavHeadCard__description">Nevropatolog</p>
            </div>
          </div>
          <img src={boy} alt="boy img" />
        </div>
        <div className="NavHeadCard__box_2 py-[19px] px-[16px] w-[188px]">
          <div className="flex items-center gap-[10px]">
            <img src={Hours} alt="Hours" />
            <h2 className="text-[16px] font-bold">24/7 xizmatlar</h2>
          </div>
          <p className="text-[10px] font-normal text-[#C3C3C3] max-w-[130px] mt-[6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper in et amet.
          </p>
        </div>
        <div className="flex flex-col items-center NavHeadCard__Icon">
          <img src={telephone} alt="telephone" className="w-[90px]"/>
          <img src={massage} alt="massage" className="w-[100px]"/>
        </div>
      </div>
    </div>
  );
}

export default NavHeadCard;
