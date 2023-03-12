import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import x from "../../Assets/Images/x.svg";

function SignUp({ setGoToSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="max-w-[536px] mx-auto mt-[200px] outline-none flex flex-col rounded-[25px] shadow-2xl px-20 pt-[70px] pb-[50px] relative">
      <img src={x} alt="x.svg" className="w-[30px] absolute top-5 right-5"/>
      <div className="bg-[#F8F8F8] rounded-[100px] py-1 px-3 mb-[50px]">
      <span className="bg-white text-[#53B175] py-[6px] px-7 rounded-[100px] shadow-md cursor-pointer" onClick={() => setGoToSignup(false)}> Kirish</span>
      </div>

      <input type={"text"} placeholder="Foydalanuvchi nomi"
        className="w-[360px] text-[#181725] font-[Poppins] font-medium text-[16px] pb-3 pt-8 outline-none border-b"
      />
      <label className="relative">
        <input type={"email"} className="w-[360px] text-[#181725] font-[Poppins] font-medium text-[16px] pb-3 pt-8 outline-none border-b"/>
      <h3 className="text-[#C3C3C3] text-[14px] font-[Poppins] absolute top-1">
      Elektron pochta (optinal)
      </h3>
      </label>
      <label className="relative mb-[80px]">
        <input
          type={showPassword ? "text" : "password"}
          className="w-[360px] text-[#181725] font-[Poppins] font-medium text-[16px] pb-3 pt-8 outline-none border-b pr-10"
        />

        {/* Eye */}
        <button type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute bottom-3 right-4 focus:outline-none">
          {showPassword ? (
            <FiEyeOff className="text-[#7C7C7C] text-[20px]" />
          ) : (
            <FiEye className="text-[#7C7C7C] text-[20px]" />
          )}
        </button>
        <h3 className="text-[#C3C3C3] text-[14px] font-[Poppins] absolute top-1">
        Parolni o’ylab toping
        </h3>
      </label>

      <span className="text-[#7C7C7C] font-[Poppins] text-[12px] text-center mb-5">
        “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz{" "} <br/>
        <strong className="text-[#53B175]">Foydalanish shartlarini qabul qilgan xisoblanasiz.</strong>
      </span>
      <button className="rounded-[50px] bg-[#53B175] text-[16px] text-white font-medium py-[10px] max-w-[360px]">
        Ro’yxatdan o’tish
      </button>
    </form>
  );
}

export default SignUp;
