import React from "react";
import grandpharm from "../../Assets/Images/grandpharm.svg";
import asklepiy from "../../Assets/Images/asklepiy.svg";
import doridarmon from "../../Assets/Images/DoriDarmon.svg";
import nikphram from "../../Assets/Images/Nik.svg";
import laxisam from "../../Assets/Images/Laxisam.svg";
import jayxun from "../../Assets/Images/Jayxun.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NavFirms() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="max-w-[1256px] mx-auto py-10 mb-24">
        <Slider {...settings}>
          <div>
            <img src={grandpharm} alt="firms logo" />
          </div>
          <div>
            <img src={asklepiy} alt="firms logo" />
          </div>
          <div>
            <img src={doridarmon} alt="firms logo" />
          </div>
          <div>
            <img src={nikphram} alt="firms logo" />
          </div>
          <div>
            <img src={laxisam} alt="firms logo" />
          </div>
          <div>
            <img src={jayxun} alt="firms logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NavFirms;

