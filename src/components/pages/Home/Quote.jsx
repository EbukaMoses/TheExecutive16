import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { quote } from "../../../utilis/data";
import { FaRegStar } from "react-icons/fa";
// import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, History } from "swiper/modules";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";

const Quote = () => {
  return (
    <>
      <section className="quote">
        <div className="quotebg padding">
          <div className="top flex-column justify-center item-center">
            <div className="Hflex">
              <Divider color="bgwhite" />
              <HeadingThree title="Wise Say" color="textwhite" />
              <Divider color="bgwhite" />
            </div>
            <HeadingOne title="Members Quote" color="textwhite" />
          </div>
        </div>
      </section>
      <section className="quoteslidercontainer">
        <div className="container">
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
            className="Swipercontainer"
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
              <SwiperSlide key={item.name}>
                <div className="flex-column quotecard">
                  <p>{item.text}</p>
                  <FaQuoteLeft className="quotemark" />
                  <div className="info">
                    <img src={item.pic} alt="" />
                    <span>{item.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Quote;
