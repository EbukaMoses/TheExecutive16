import { HeroImg } from "../../public/images/index";

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
        <h2 className="text-center text-6xl md:text-8xl text-white font-[cursive] ">
          Executive Managers
        </h2>
      </div>
    </div>
  );
};

export default Hero;
