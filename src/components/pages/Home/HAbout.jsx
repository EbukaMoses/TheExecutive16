import Button from "../../common/Button";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { img, about } from "/public/index.js";
import { FaRegStar } from "react-icons/fa";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, History } from "swiper/modules";
import HeadingThree from "../../common/HeadingThree";
import Divider from "../../common/Divider";
import HeadingOne from "../../common/HeadingOne";

const HAbout = () => {
  return (
    <>
      <div className="container-10">
        <div className="HAbout">
          <div className="TopBox">
            <div className="left">
              <h5>We from different placese to stay TOGETHER.</h5>
              <Button title="Learn More" path="/about" bg="trans" />
            </div>

            <div className="right">
              <Swiper
                // slidesPerView={3}
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
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {img.map((item) => (
                  <SwiperSlide key={item.src}>
                    <img src={item.src} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="container-10">
        <div className="HAboutContent">
          <div className="contentLeft">
            <div className="imgBox">
              <img src={about} alt="" />
              <br />
              <div className="stars">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span>Executives16</span>
                <sup>
                  <PiTrademarkRegisteredFill />
                </sup>
              </div>
            </div>
          </div>

          <div className="contentRight">
            <div className="Hflex">
              <HeadingThree title="Who We Are" color="textred" />
              <Divider color="bgred" />
            </div>
            <HeadingOne title="Bus-Admin Class of 2016" color="textblack" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. x
              Molestiae, quaerat. Eum dicta tempora quae reprehenderit nam quam
              alias. Quisquam facere saepe minus officia nesciunt explicabo
              magni quibusdam earum aspernatur. Consequatur aut, alias,
              voluptatem quae at officiis quidem quasi, vitae cum veritatis
              placeat sunt nam vel enim! Placeat nulla eos, vel vitae dolore
              asperiores optio dignissimos, aliquam animi possimus a quisquam
              totam reiciendis dicta facere earum aliquid ipsam cupiditate ullam
              fugiat? Excepturi modi delectus eum animi, mollitia impedit
              incidunt autem eaque natus quos, rem est dolorum ratione ducimus
              porro explicabo sed, accusantium assumenda dicta dolorem!
              Architecto rerum fugit quod dolore unde.
            </p>
            <br />
            <br />
            <Button
              title="Learn More"
              path="/about"
              bg="bgred"
              icon={<FaLongArrowAltRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HAbout;
