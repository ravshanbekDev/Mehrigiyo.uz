import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import box from "../../Assets/Images/box.svg";
import telephone from "../../Assets/Images/telephone.svg";
import massage from "../../Assets/Images/massage.svg";
import { BsFillTrashFill } from "react-icons/bs";
import "./Favorite.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../redux/favoriteSlice/favoriteSlice";

function Favorite() {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div className="Favorite">
      <div className="max-w-[1256px] mx-auto py-7 pl-5 pb-[220px] relative">
        <NavLink to={"/"} className="text-[#505050] font-[Poppins] text-[12px]">
          Bosh sahifa /{" "}
        </NavLink>
        <NavLink
          to={"/Favorite"}
          className="text-[#53B175] font-[Poppins] text-[12px]"
        >
          Saqlangan dorilar
        </NavLink>
        <h2 className="text-[#282938] font-semibold text-[24px] mt-2">
          Sevimli dorilar
        </h2>
        <div className="flex flex-col items-center justify-center pt-[130px]">
          {favorite.length > 0 ? (
            <img src={box} alt="box.png" style={{ display: "none" }} />
          ) : (
            <img src={box} alt="box.png" className="z-40" />
          )}
          {favorite.length > 0 ? (
            ""
          ) : (
            <h2 className="text-[#B0B7C3] text-[20px] font-medium text-center">
              Saqlangan dorilar bo’sh!
            </h2>
          )}
          {favorite.length > 0 ? (
            ""
          ) : (
            <p className="text-[#B0B7C3] text-[12px] max-w-[300px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor
            </p>
          )}
        </div>
        {favorite.map((e) => (
            <div className="flex flex-col gap-4">
              <div key={e.id} className="grid grid-cols-5 w-[900px] place-items-center pl-[30px] py-6 pr-[30px] border rounded-[20px]">
                <img src={e.img} alt="img" className="w-[77px] h-[77px]" />
                <span className="flex flex-col items-start">
                  <h1 className="text-[#181725] font-medium">{e.caption}</h1>
                  <p className="text-[#7C7C7C;] text-[14px]">{e.info}</p>
                </span>
                <button className="bg-[#53B175] rounded-[17px] w-[45px] h-[45px] text-white text-[30px] font-semibold">+</button>
                <span className="flex flex-col items-start">
                  <h1 className="text-[#7C7C7C;] line-through">{e.num} uzs</h1>
                  <p className="text-[#53B175] font-bold text-[24px]">{e.numSum}</p>
                </span>
                <button
                  className="text-[red] w-5 h-5"
                  onClick={() => handleDelete(e.id)}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
        ))}
        <div className="flex flex-col items-center absolute right-0">
          <img src={telephone} alt="telephone" className="w-[90px]" />
          <img src={massage} alt="massage" className="w-[100px]" />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
