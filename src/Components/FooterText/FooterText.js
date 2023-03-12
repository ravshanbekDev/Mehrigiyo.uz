import React from "react";

function FooterText({ caption, info, info2, info3 }) {
  return (
    <div>
      <h2 className="text-[#F4F5F7] font-medium text-[18px]">{caption}</h2>
      <ul className="list-none flex flex-col items-start gap-3 mt-[24px]">
        <li className="text-[#B0B7C3] text-[14px] font-normal">{info}</li>
        <li className="text-[#B0B7C3] text-[14px] font-normal">{info2}</li>
        <li className="text-[#B0B7C3] text-[14px] font-normal">{info3}</li>
      </ul>
    </div>
  );
}

export default FooterText;
