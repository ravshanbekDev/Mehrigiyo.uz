import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // import icons
import SignUp from "../SignUp/SignUp";
import x from "../../Assets/Images/x.svg";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false); // new state variable for password visibility
  const [goToSingup, setGoToSignup] = useState(false);
  const numRef = useRef();
  const passwordRef = useRef();
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || []
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setToken({
      number: numRef.current.value,
      password: passwordRef.current.value,
    });
    window.location.reload();
  };
  window.localStorage.setItem("token", JSON.stringify(token));
  return goToSingup ? (
    <SignUp setGoToSignup={setGoToSignup} />
  ) : (
    <form
      onSubmit={handleSubmit}
      className="max-w-[536px] mx-auto mt-[200px] outline-none flex flex-col rounded-[25px] shadow-2xl px-20 pt-[70px] pb-[50px] relative"
    >
      <img src={x} alt="x.svg" className="w-[30px] absolute top-5 right-5" />
      <div className="bg-[#F8F8F8] rounded-[100px] py-1 px-3 mb-[50px]">
        <span
          className="bg-white text-[#53B175] py-[6px] px-7 rounded-[100px] shadow-md cursor-pointer"
          onClick={() => setGoToSignup(true)}
        >
          {" "}
          Ro’yxatdan o’tish
        </span>
      </div>
      <label className="relative">
        <PhoneInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          defaultCountry="UZ"
          ref={numRef}
          className="max-w-[360px] text-[#181725] font-[Poppins] font-medium text-[16px] pb-3 pt-8 outline-none border-b"
        />
        <h3 className="text-[#C3C3C3] text-[14px] font-[Poppins] absolute top-0">
          Telefon raqam
        </h3>
      </label>
      <label className="relative mb-[80px]">
        <input
          ref={passwordRef}
          type={showPassword ? "text" : "password"}
          className="w-[360px] text-[#181725] font-[Poppins] font-medium text-[16px] pb-3 pt-8 outline-none border-b pr-10"
        />

        {/* Eye */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute bottom-3 right-4 focus:outline-none"
        >
          {showPassword ? (
            <FiEyeOff className="text-[#7C7C7C] text-[20px]" />
          ) : (
            <FiEye className="text-[#7C7C7C] text-[20px]" />
          )}
        </button>
        <h3 className="text-[#C3C3C3] text-[14px] font-[Poppins] absolute top-1">
          Parol
        </h3>
      </label>
      <button className="rounded-[50px] bg-[#53B175] text-[16px] text-white font-medium py-[10px] max-w-[360px]">
        Tizimga kirish
      </button>
    </form>
  );
}

export default Login;
