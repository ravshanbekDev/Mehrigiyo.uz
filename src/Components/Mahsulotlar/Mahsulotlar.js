import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { addToFavorite } from "../../redux/favoriteSlice/favoriteSlice";
import Modal from "../Modal/Modal";
import NavCard from "../NavCard/NavCard";
import yog from "../../Assets/Images/yog.png";
import sirop from "../../Assets/Images/sirop.png";
import RohatYogi from "../../Assets/Images/rohatYogi.png";
import bananas from "../../Assets/Images/bananas.png";
import "./Products.scss";

function Products() {
  const [modalActive, setModalActive] = useState(false);
  const productsData = [
    {
      id: 1,
      caption: "ROHAT Yogi №2",
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
      caption: "ROHAT Yogi №2",
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
  ];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart, "ishladi");
  const favorite = useSelector((state) => state.favorite);
  const handleProductClick = (product) => {
    setModalActive(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };
  return (
    <div className="max-w-[1319px] mx-auto Mahsulot">
      <div className="grid grid-cols-5">
        {productsData.map((product) => (
          <NavCard
            key={product.id}
            mahsulotImg={product.img}
            title={product.caption}
            info={product.info}
            num={product.num}
            numSum={product.numSum}
            add={() => handleAddToCart(product)}
            onFavoriteToggle={() => handleAddToFavorite(product)}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
