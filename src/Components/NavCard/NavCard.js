import React from "react";
import arrow from "../../Assets/Images/Vector.svg";
import unLiked from "../../Assets/Images/unLiked.svg";
import like from "../../Assets/Images/Liked.svg";
import "./NavCard.scss";


function NavCard({mahsulotImg,  caption, info, num, numSum, add, onClick, onFavoriteToggle}) {
  return (
    <div className="NavCard px-[10px] pt-[13px] pb-[19px]">
      <div className="flex items-start justify-end" onClick={onFavoriteToggle}>
        <img src={mahsulotImg} alt="mahsulotImg"/>
        {onFavoriteToggle ? <img src={unLiked} alt="unliked"/> : <img src={like} alt="liked"/>}
      </div>
      <h2 className="NavCard__caption">{caption}</h2>
      <h4 className="NavCard__info">{info}</h4>
      <div className="NavCard__wrap">
        <div>
          <h2 className="line-through NavCard__num">{num} uzs</h2>
          <h2 className="NavCard__numSum">{numSum} uzs</h2>
        </div>
        <button onClick={add} className="bg-[#53B175] rounded-[17px] w-[45px] h-[45px] text-white text-[30px] font-semibold">+</button>
      </div>
      <button onClick={onClick} className="flex items-center justify-center gap-[7px] text-[#BDBDBD] text-[14px] font-normal mt-[3px] cursor-pointer">
      Tafsilotlar <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default NavCard;
