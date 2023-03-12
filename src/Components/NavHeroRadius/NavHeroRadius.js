import { NavLink } from "react-router-dom";
import { ReactComponent as Cart } from "../../Assets/Images/shoppingCart.svg";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

function NavHeroRadius() {
  const cart = useSelector((state) => state.cart.data);
  const favorite = useSelector((state) => state.favorite);

  const navLinkStyles = ({ isActive }) => {
    return {
      background: isActive ? "#53B175" : "#FFFFFF",
      color: isActive ? "#FFFFFF" : "#F3603F",
      fill: isActive ? "#fff" : "#505050"
    };
  };
  return (
    <div className="flex items-center gap-[6px] mr-[80px] NavHeroRadius">
      <NavLink to={"/Favorite"} className="w-[30px] h-[30px] shadow-lg bg-white rounded-[100px] flex items-center justify-center relative" style={navLinkStyles}>
        <MdFavoriteBorder className="text-[20px]" />
        <span className={`absolute top-[-8px] left-6 ${favorite.length > 0 ? 'bg-[red]' : ""} text-white font-bold text-[12px] rounded-[50%] w-[14px] h-[14px] flex items-center justify-center`}>{favorite.length > 0 ? `${favorite.length} ` : ""}</span>
      </NavLink>
      <NavLink to={"/Cart"}className="w-[30px] h-[30px] shadow-lg bg-white rounded-[100px] flex items-center justify-center relative" style={navLinkStyles}>
        <Cart />
        <span className={`absolute top-[-8px] left-6 ${cart.length > 0 ? 'bg-[red]' : ""} text-white font-bold text-[12px] rounded-[50%] w-[14px] h-[14px] flex items-center justify-center`}>{cart.length > 0 ? `${cart.length} ` : ""}</span>
      </NavLink>
    </div>
  );
}

export default NavHeroRadius;
