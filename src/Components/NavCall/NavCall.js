import React from "react";
import "./NavCall.scss";
import adminka from "../../Assets/Images/ContactGirl.jpg";
import arrow from "../../Assets/Images/Send.svg";

function NavCall() {
  return (
    <div className="NavCall">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 items-end place-items-start">
        <img src={adminka} alt="adminka" className="w-[500px]" />
        <form>
          <h3 className="text-[12px] text-[#53B175] font-normal">Biz bilan bog'lanish</h3>
          <h2 className="font-semibold text-[30px] mb-5">So'rovingizni yuboring</h2>
          <div className="flex flex-col items-start gap-5">
          <input type={"text"} placeholder="Mahmud" className="text-[#282828] text-[16px] border-b py-3 hover:border-b-[#53B175] hover:text-[#53B175] outline-none bg-transparent"/>
          <input type={"email"} placeholder="nmahmud0928@gmail.com" className="text-[#282828] text-[16px] border-b py-3 hover:border-b-[#53B175] hover:text-[#53B175] outline-none bg-transparent"/>
          <input type={"tel"} placeholder="+998 94 681 |" className="text-[#282828] text-[16px] border-b py-3 hover:border-b-[#53B175] hover:text-[#53B175] outline-none bg-transparent"/>
          <input type={"text"} className="text-[#282828] text-[16px] border-b py-3 hover:border-b-[#53B175] hover:text-[#53B175] outline-none bg-transparent"/>
          </div>
          <button type={"submit"} className="flex items-center gap-5 text-[#181725] text-[16px] bg-[#D8ECE0] rounded-[50px] max-w-[200px] py-2 px-5 mt-6">
          Xabar yuborish <img src={arrow} alt="arrow"/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default NavCall;
