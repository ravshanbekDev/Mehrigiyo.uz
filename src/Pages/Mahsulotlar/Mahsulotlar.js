import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { addToFavorite } from "../../redux/favoriteSlice/favoriteSlice";
import search from "../../Assets/Images/search.svg";
import Category from "../../Components/Category/Category";
import NavCard from "../../Components/NavCard/NavCard";
import sirop from "../../Assets/Images/sirop.png";
import yog from "../../Assets/Images/yog.png";
import RohatYogi from "../../Assets/Images/rohatYogi.png";
import bananas from "../../Assets/Images/bananas.png";
import telephone from "../../Assets/Images/telephone.svg";
import massage from "../../Assets/Images/massage.svg";
import "./Mahsulots.scss";
import Modal from "../../Components/Modal/Modal";

function Mahsulotlar() {
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsData = [
    {
      id: 1,
      caption: "ROHAT Yog`i №2",
      info: "Mavjud",
      num: "17,190,",
      numSum: "16 000",
      img: yog,
    },
    {
      id: 2,
      caption: "Rohat Sirop",
      info: "Erkaklar kuchi",
      num: "200,190,",
      numSum: "150 000",
      img: sirop,
    },
    {
      id: 3,
      caption: "Organic Bananas",
      info: "7pcs, Price",
      num: "17,190,",
      numSum: "16 000",
      img: bananas,
    },
    {
      id: 4,
      caption: "ROHAT Yog`i №2",
      info: "Mavjud",
      num: "17,190,",
      numSum: "16 000",
      img: RohatYogi,
    },
    {
      id: 5,
      caption: "ROHAT Yog`i №2",
      info: "Mavjud",
      num: "17,190,",
      numSum: "16 000",
      img: yog,
    },
    {
      id: 6,
      caption: "ROHAT Yog`i №2",
      info: "Mavjud",
      num: "17,190,",
      numSum: "16 000",
      img: yog,
    },
    {
      id: 7,
      caption: "Organic Bananas",
      info: "7pcs, Price",
      num: "17,200,",
      numSum: "15 000",
      img: bananas,
    },
    {
      id: 8,
      caption: "Rohat Sirop",
      info: "Erkaklar kuchi",
      num: "200,190,",
      numSum: "150 000",
      img: sirop,
    },
    {
      id: 9,
      caption: "ROHAT",
      info: "Mavjud",
      num: "20,000,",
      numSum: "12 000",
      img: yog,
    },
  ];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart, "ishladi");
  const favorite = useSelector((state) => state.favorite);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalActive(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };
  return (
    <div className="Mahsulots">
      <div className="max-w-[1256px] mx-auto pb-[390px]">
        <h2 className="mt-12 text-[12px] text-[#505050]">
          Bosh sahifa / <strong className="text-[#53B175]">Mahsulotlar</strong>
        </h2>
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-semibold">Mahsulotlar</h2>
          <label className="relative">
            <input
              type={"search"}
              placeholder="Qidirish"
              className="py-2 px-10 bg-[#EEF1F5] rounded-[100px] text-[14px] text-[#B0B7C3] max-w-[140px] outline-none"
            />
            <img
              src={search}
              alt="search"
              className="absolute top-[10px] left-3"
            />
          </label>
        </div>
        <div className="flex items-start gap-16 relative">
          <Category />
          <div className="grid grid-rows-3 grid-cols-3 gap-7">
            {productsData.map((product) => (
              <NavCard
                key={product.id}
                mahsulotImg={product.img}
                caption={product.caption}
                info={product.info}
                num={product.num}
                numSum={product.numSum}
                onClick={() => handleProductClick(product)}
                add={() => handleAddToCart(product)}
                onFavoriteToggle={() => handleAddToFavorite(product)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center absolute right-0 top-[400px]">
            <img src={telephone} alt="telephone" className="w-[90px]" />
            <img src={massage} alt="massage" className="w-[100px]" />
          </div>
        </div>
      </div>
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default Mahsulotlar;
