import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/arrow.svg"
import Accordion from "../NavAccordion/NavAccordion";

function NavInfo() {
  return (
    <div className="max-w-[1256px] mx-auto">
      <h2 className="text-[#282938] font-semibold text-[30px] mb-3">
        Ko’p so'raladigan savollar
      </h2> 
      <div className="flex flex-wrap items-start justify-between">
      <span>
      <p className="text-[#53B175;] opacity-[0.87] text-[16px] font-normal mb-11">
        Qo'shimcha ma'lumot uchun <br /> biz bilan bog'laning
      </p>
      <Link className="text-[#181725] text-[16px] bg-[#D9ECE1] py-2 px-5 rounded-[50px] font-normal flex items-center justify-between w-[200px]">
        Batafsil <img src={arrow} alt="arrow"/>
      </Link>
      </span>
      <div>
      <Accordion num={"01"} info={"Какой состав сока Alatoo?"}/>
      <Accordion num={"02"} info={"Сколько стоит Алатоо и сколько стоит доставка?"}/>
      <Accordion num={"03"} info={"Здравствуйте, аллергия часто на этот сок?"}/>
      <Accordion num={"04"} info={"Эффективен ли сок Алатоо при часто рецидивирующем герпесе?"}/>
      <Accordion num={"05"} info={"Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?"}/>
      </div>
      </div>
    </div>
  );
}

export default NavInfo;
