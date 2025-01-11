import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroImg } from "../../public/images/index";

const InnerBanner = ({ title, icon }: any) => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex relative flex-col items-center justify-center w-full h-[30vh] px-[10%] overflow-hidden text-4xl font-[cursive] font-bold bg-[#6b0505] shadow-xl">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#6b0505d3] z-10"></div>
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 right-0 left-0 bottom-0 object-fill w-full"
      />
      <span
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex items-center text-white gap-3 z-20"
      >
        {icon && icon} {title}
      </span>
    </div>
  );
};

export default InnerBanner;
