import React from "react";
import "./Payment.scss";
function Payment({ number, sum, total }) {
  return (
    <div className="Payment">
      <div className="Payment__infp">
        <span className="Payment__wrap">
          <p> Mahsulotlar ({number})</p>
          <h2>{sum}</h2>
        </span>
        <span className="Payment__wrap">
          <p> Chegirma </p>
          <h2>0</h2>
        </span>
        <span className="Payment__wrap">
          <p> Yetkazib berish </p>
          <h2>15 000</h2>
        </span>
        <span className="Payment__wrapper">
          <p> Umumiy </p>
          <h2>{total} so’m</h2>
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-[30px]">
        <button className="Payment__btn bg-[#53B175] text-white font-semibold">
          To’lovga o’tish
        </button>
        <button className="Payment__btn bg-[#EEF8F2] text-[#181725]">
          Menyuga qaytish
        </button>
      </div>
    </div>
  );
}

export default Payment;
