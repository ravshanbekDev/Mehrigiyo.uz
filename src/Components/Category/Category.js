import React from "react";
import revers from "../../Assets/Images/revers.svg";
import CheckboxExample from "../CheckBox/CheckBox";

function Category() {
  return (
    <div className="rounded-[15px] shadow-2xl max-w-[280px] bg-white py-5 pr-2 pb-6 pl-5 h-[400px] mt-6">
      <div className="flex items-center gap-[55px] justify-between">
        <h2 className="text-[16px] font-semibold font-[Poppins]">
          Kategoriyalar
        </h2>
        <span className="flex items-center gap-1 text-[#B0B7C3] text-[14px] underline font-[Poppins] capitalize">
          <img src={revers} alt="revers" />
          Tozalash
        </span>
      </div>
      <div className="flex flex-col">
      <CheckboxExample/>
      <select className="outline-none capitalize underline text-[#53B175] text-[16px]">
        <option>Ko’proq</option>
      </select>
      </div>
    </div>
  );
}

export default Category;
