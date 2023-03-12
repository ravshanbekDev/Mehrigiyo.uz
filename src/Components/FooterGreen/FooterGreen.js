import React from "react";

function FooterGreen() {
  return (
    <div className="bg-[#427A56] rounded-t-[25px] pt-[22px] pb-[17px] px-[37px] flex items-start justify-between gap-[70px] mt-[60px]">
        <div className="flex flex-col items-start gap-2 ">
        <p className="text-[14px] text-white font-normal opacity-60">E-mail</p>
        <a
          href="mailto:info@mehrigiyo.uz"
          className="text-white text-[18px] font-semibold hover:cursor-pointer">
          info@mehrigiyo.uz
        </a>
      </div>
      <div className="flex flex-col items-start gap-2 ">
        <p className="text-[14px] text-white font-normal opacity-60">
          Bizga qo'ng'iroq qiling
        </p>
        <a
          href="tel:+99898 125 31 03"
          className="text-white text-[18px] font-semibold hover:cursor-pointer">
          +99898 125 31 03
        </a>
      </div>
    </div>
  );
}

export default FooterGreen;
