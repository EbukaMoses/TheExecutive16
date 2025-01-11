import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, History } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { BizLogo } from "../../public/images";
import Container from "./Container";

const Quotes = () => {
  const quote = [
    {
      text: "No be who read pass, Nah who pass read. ",
      name: "Emma Chim Chim",
      pic: BizLogo,
    },
    {
      text: "School nah scam, till you see where two agbero dey argue.",
      name: "Myke Stuff",
      pic: BizLogo,
    },
    {
      text: "Your destiny helper fit from your dressing, dey tempted to know you the more. so dress NICE but not more than your POCKET",
      name: "Kalu Izzy",
      pic: BizLogo,
    },
    {
      text: "Woman wey marry, carry belly immediately no know wetin barren women dey pass through",
      name: "Chuks Osigwe",
      pic: BizLogo,
    },
    {
      text: "Your carry condom put for wallet dey expect make your money increase. you no know say condom dey prevent MULTIPLICATION? Can someone hear me?",
      name: "Derrick Nwankwo",
      pic: BizLogo,
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-DarkRed w-full lg:h-[45vh] md:h-[30vh] h-[35vh] relative">
        <Container className="quotebg padding">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <Divider className="bg-white" />
              <HeadingThree title="Wise Say" className="text-white" />
              <Divider className="bg-white" />
            </div>
            <HeadingOne title="Members Quote" className="text-white" />
          </div>
        </Container>
      </section>
      <Container className="mt-[-180px] z-40">
        <div className="flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            history={{
              key: "slide",
            }}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[Autoplay, Navigation, History]}
            className="w-full h-full"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {quote.map((item) => (
              <SwiperSlide
                key={item.name}
                className="flex items-center text-lg justify-center z-40"
              >
                <div className="relative flex h-[30vh] p-10 mb-[30%] bg-white shadow-xl">
                  <p className="text-base">{item.text}</p>
                  <FaQuoteLeft className="absolute left-5 top-5 text-2xl text-DarkRed" />
                  <div className="absolute gap-3 bottom-6 mt-5 flex items-center">
                    <img
                      src={item.pic}
                      alt=""
                      className="w-[50px] h-[50px] mr-3"
                    />
                    <span className="text-lg font-bold">{item.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Quotes;
