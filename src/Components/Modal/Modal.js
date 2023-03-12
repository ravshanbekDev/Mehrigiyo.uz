import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/Counter/Counter";
import "./Modal.scss";
import bananas from "../../Assets/Images/bananas.png";
import StarRating from "../../StarIcon";
import x from "../../Assets/Images/x.svg";

import {
  IoChevronDown,
  IoChevronUpSharp,
  IoChevronForwardSharp,
} from "react-icons/io5";

function Modal({ active, setActive }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__x"><img src={x} alt="x"/></button>
          {/* Data */}
          <div className="flex items-start justify-center gap-20 mt-[140px]">
          <span className="flex items-start gap-4 flex-col">
          <img src={bananas} alt="product img" className="modal__card "/>
          <img  src={bananas} alt="product img"className="modal__cards"/>
          </span>
            <img src={bananas} alt="product img" className="modal__img" />
            <div className="w-[560px]">
              <span>
                <h2 className="font-semibold text-[32px] font-[Poppins]">
                  Rastaropsha MAX
                </h2>
                <StarRating />
              </span>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <button
                    onClick={() => dispatch(decrement())}
                    className="text-[#B3B3B3] text-[40px]"
                  >
                    -
                  </button>
                  <p className="bg-[#E2E2E2] rounded-[17px] w-11 h-11 py-[14px] px-5 flex items-center justify-center text-[#181725] font-semibold text-[18px]">
                    {count}
                  </p>
                  <button
                    onClick={() => dispatch(increment())}
                    className="text-[#53B175] text-[40px]"
                  >
                    +
                  </button>
                </span>
                <h2 className="text-[#53B175] font-bold text-[30px]">
                  17.000 uzs
                </h2>
              </div>
              <hr className="bg-[rgba(226, 226, 226, 0.7)]" />

              {/* Accordion */}
              <div className="accordion font-[Poppins]">
                <span className="flex items-center justify-between pt-4 pb-3">
                  <p className="text-[#181725] font-semibold text-[16px]">
                    Mahsulot haqida
                  </p>
                  <button
                    className="accordion-button"
                    onClick={toggleAccordion} >
                    {isExpanded ? (
                      <IoChevronUpSharp className="text-[#181725] text-[20px]" />
                    ) : (
                      <IoChevronDown className="text-[#181725] text-[20px]" />
                    )}
                  </button>
                </span>
                {isExpanded && (
                  <div className="accordion-content pb-6">
                    Xalq tabobatida jigar uchun foydalidir, hazm qilishni
                    yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini
                    normallantiradi, qonni tozalaydi, semizlikni oldini oladi
                  </div>
                )}
              </div>
              <hr className="bg-[rgba(226, 226, 226, 0.7)]" />
              <div className="flex items-center justify-between pt-4">
                <p className="font-semibold text-[#181725] text-[16px]">
                  Og’irligi
                </p>
                <span className="flex items-start justify-between gap-4">
                <p className="bg-[#EBEBEB] text-[#7C7C7C] text-[11px] p-1 rounded flex items-center">
                  100 gr 
                </p>
                <IoChevronForwardSharp className="text-[#181725] text-[20px]"/>
                </span>
              </div>
            </div>
          </div>
        <button className="modal__btn">Savatga qo'shish</button>
      </div>
    </div>
  );
}

export default Modal;
