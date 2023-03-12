import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from 'react-icons/bs';
import Payment from "../Payment/Payment";
import leaf from "../../Assets/Images/barg.png"
import box from "../../Assets/Images/box.svg";
import telephone from "../../Assets/Images/telephone.svg";
import massage from "../../Assets/Images/massage.svg";
import { removeFromCart, toggleCartQty, getCartTotal } from "../../redux/cartSlice/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.data);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(removeFromCart(id));

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <div className="Cart relative pb-[150px]">
      <div className="max-w-[1256px] mx-auto py-7 pl-5 pb-[220px] relative">
        <NavLink
          to={"/"}
          className="text-[#505050] font-[Poppins] text-[12px]"
        >
          Bosh sahifa /{" "}
        </NavLink>
        <NavLink
          to={"/Cart"}
          className="text-[#53B175] font-[Poppins] text-[12px]"
        >
          Savatcha
        </NavLink>
        <h1 className="text-[#282938] text-[24px] font-semibold">
          Savatcha
          {cart.length > 0 ? `da ${cart.length} ta mahsulot bor` : ""}
        </h1>
        <div className="flex flex-col items-center justify-center pt-[130px]">
          {cart.length > 0 ? (
            <img src={box} alt="box.png" style={{display: "none"}}/>
          ) : (
            <img src={box} alt="box.png" className="z-40" />
            
          )}
        </div>
        {cart.map((e) => (
          <div key={e.id} className="flex items-start justify-between">
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="flex items-center justify-between w-[830px] pl-[30px] py-6 pr-[30px] border rounded-[20px]">
                <img src={e.img} alt="img" className="w-[77px] h-[77px]" />
                <span className="flex flex-col items-start">
                <h1 className="text-[#181725] font-medium">{e.caption}</h1>
                  <p className="text-[#7C7C7C;] text-[14px]">{e.info}</p>
                </span>
                <span className="flex items-center gap-[10px]">
                  <button
                    onClick={() =>
                      dispatch(toggleCartQty({ id: e.id, type: "DEC" }))
                    }
                    className="text-[#B3B3B3] text-[40px]"
                  >
                    -
                  </button>
                  <p className="bg-white border rounded-[13px] w-11 h-11 py-[14px] px-[10px] flex items-center justify-center">
                    {e.quantity}
                  </p>
                  <button
                    onClick={() =>
                      dispatch(toggleCartQty({ id: e.id, type: "INC" }))
                    }
                    className="text-[#53B175] text-[40px]"
                  >
                    +
                  </button>
                </span>
                <span className="flex flex-col items-start">
                  <h1 className="text-[#7C7C7C;] line-through">{e.num} uzs</h1>
                  <p className="text-[#53B175] font-bold text-[24px]">{e.numSum} uzs</p>
                </span>
               <button className="text-[red] w-5 h-5" onClick={() => handleDelete(e.id)}><BsFillTrashFill/></button>
              </div>
              </div>
              <Payment sum={e.quantity * e.numSum} number={cart.length} total={e.temptotalPrice}/>
            </div>
          ))}
        <div className="flex flex-col items-center absolute right-0 bottom-0">
          <img src={telephone} alt="telephone" className="w-[90px]" />
          <img src={massage} alt="massage" className="w-[100px]" />
        </div>
      </div>
      {cart.length > 0 ? (
              <img src={leaf} alt="img" className="absolute w-[490px] right-0 bottom-0"/>
          ) : (
            <img src={leaf} alt="img" className="absolute right-52 top-[-20px] z-0"/>
          )}
    </div>
  );
}

export default Cart;
