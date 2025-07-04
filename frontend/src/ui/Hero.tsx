import { MdSchool } from "react-icons/md";
import { HeroImg } from "../../public/images/index";
import { GiChaingun } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="relative top-0 0verflow-y-hidden h-[100vh] md:h-[80vh]">
      <div className="absolute w-full h-full top-0 b-0 r-0 l-0 bg-Overlay z-1"></div>
      <img
        src={HeroImg}
        className="w-full h-full object-cover"
        alt="The Executive Hero Image"
      />
      <div className="absolute bottom-[45%] left-0 right-0">
        <h2 className="text-center text-6xl md:text-8xl text-white font-[cursive] font-bold ">
          Executive Managers
        </h2>
        {/* <MdSchool className="text-white text-6xl mx-auto mt-5" /> */}
        {/* <GiChaingun className="text-white text-6xl mx-auto mt-" /> */}
      </div>
    </div>
  );
};

export default Hero;
