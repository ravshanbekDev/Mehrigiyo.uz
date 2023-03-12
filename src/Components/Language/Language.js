// import { ReactComponent as Uz } from "../../Assets/Images/uzb.svg";
// import { ReactComponent as Ru } from "../../Assets/Images/rus.svg";
// import { ReactComponent as Eng } from "../../Assets/Images/eng.svg";

const LanguageSelector = () => {
  return (
    <div className="bg-transparent">
      <select className="bg-transparent">
        <option value="uz">
          Uz
        </option>
        <option value="uz">
           Ru
        </option>
        <option value="eng"> Eng</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
