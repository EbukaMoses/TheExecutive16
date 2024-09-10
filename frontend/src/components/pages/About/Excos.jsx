import React from "react";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import HeadingTwo from "../../common/Headings/HeadingTwo";
import derrick from "/images/derrick.jpg";
import prince from "/images/prince.jpg";

const Excos = () => {
  return (
    <>
      <section className="darkgray">
        <div className="container padding">
          <div className="top flex-column justify-center item-center">
            <div className="Hflex">
              <Divider color="bgred" />
              <HeadingThree title="Our Association Lead" color="textred" />
              <Divider color="bgred" />
            </div>
            <HeadingOne title="Current Executives" color="textblack" />
          </div>

          <div className="grid3">
            <div className="excoscard">
              <img src={derrick} alt="" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Derrick Nwankwo" color="textblack" />
                <HeadingThree title="Association President" color="textblack" />
              </div>
            </div>

            <div className="excoscard">
              <img src={prince} alt="" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Prince Ndionyenmah" color="textblack" />
                <HeadingThree title="Fin. Sec." color="textblack" />
              </div>
            </div>
            <div className="excoscard">
              <img src={prince} alt="" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Prince Ndionyenmah" color="textblack" />
                <HeadingThree title="Fin. Sec." color="textblack" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Excos;
