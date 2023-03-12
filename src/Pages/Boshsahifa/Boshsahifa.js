import Products from "../../Components/Mahsulotlar/Mahsulotlar";
import NavBubles from "../../Components/NavBubles/NavBubles";
import NavHeadBox from "../../Components/NavHeadBox/NavHeadBox";
import NavHeadCard from "../../Components/NavHeadCard/NavHeadCard";
import NavInfo from "../../Components/NavInfo/NavInfo";
import NavCall from "../../Components/NavCall/NavCall";
import NavFirms from "../../Components/NavFirms/NavFirms";
import "./Boshsahifa.scss";

function Boshsahifa() {
  return (
    <div className="Boshsahifa">
      <h2 className="Boshsahifa__caption">Bepul shifokor maslahat kerakmi?</h2>
      <p className="Boshsahifa__description">
        24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br /> Faqat{" "}
        <strong className="text-[#53B175] font-normal text-[16px] text-center underline">
          mobil ilovada
        </strong>
      </p>
      <NavHeadCard />
      <NavHeadBox />
      <Products />
      <NavBubles />
      <NavInfo />
      <NavCall />
      <NavFirms />
    </div>
  );
}

export default Boshsahifa;
