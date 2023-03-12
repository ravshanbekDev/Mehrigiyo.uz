import React from "react";
import trcuk from "../../Assets/Images/truck.svg";
import wallet from "../../Assets/Images/wallet.svg";
import percentage from "../../Assets/Images/percentage.svg";
import headphones from "../../Assets/Images/headphones.svg";
import "./NavHeadBox.scss";

export default function NavHeadBox() {
  return (
    <div className="mt-36 mb-20">
      <div className="NavHeadBox grid grid-cols-4">
        <div className="flex items-center gap-5">
          <div className="bg-[#E1F1E8] w-[70px] h-[70px] rounded-[50%] flex items-center justify-center">
            <img src={trcuk} alt="truck" />
          </div>
          <div>
            <h2 className="font-medium text-[1D1D1F] text-[18px]">
              Yetkazib berish bepul
            </h2>
            <p className="font-normal text-[14px] text-[#1D1D1F] opacity-[0.75] max-w-[170px]">
              100 000 so'mdan ortiq buyurtma berganingizda
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-[#E1F1E8] w-[70px] h-[70px] rounded-[50%] flex items-center justify-center">
            <img src={wallet} alt="wallet" />
          </div>
          <div>
            <h2 className="font-medium text-[1D1D1F] text-[18px]">
              Tez to'lov
            </h2>
            <p className="font-normal text-[14px] text-[#1D1D1F] opacity-[0.75] max-w-[170px]">
              100% xavfsiz to'lov
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-[#E1F1E8] w-[70px] h-[70px] rounded-[50%] flex items-center justify-center">
            <img src={percentage} alt="percentage" />
          </div>
          <div>
            <h2 className="font-medium text-[1D1D1F] text-[18px]">
              Doimiy chegirmalar
            </h2>
            <p className="font-normal text-[14px] text-[#1D1D1F] opacity-[0.75] max-w-[100%]">
              Ular allaqachon ishlamoqda
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-[#E1F1E8] w-[70px] h-[70px] rounded-[50%] flex items-center justify-center">
            <img src={headphones} alt="headphones" />
          </div>
          <div>
            <h2 className="font-medium text-[1D1D1F] text-[18px]">
              Onlayn yordam
            </h2>
            <p className="font-normal text-[14px] text-[#1D1D1F] opacity-[0.75] max-w-[170px]">
              Ish vaqti: 08:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
