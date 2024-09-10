import React from "react";
import HeadingOne from "../../common/Headings/HeadingOne";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingTwo from "../../common/Headings/HeadingTwo";

const Mission = () => {
  return (
    <>
      <section className="quote">
        <div className="quotebg padding">
          <div className="top flex-column justify-center item-center">
            <div className="Hflex">
              <Divider color="bgwhite" />
              <HeadingThree title="Where we are going" color="textwhite" />
              <Divider color="bgwhite" />
            </div>
            <HeadingOne title="Our Mission & Vision" color="textwhite" />
          </div>
        </div>
      </section>
      {/* <section className="darkgray">
        <div className="container padding"> */}
      {/* <div className="top flex-column justify-center item-center">
            <div className="Hflex">
              <Divider color="bgred" />
              <HeadingThree title="Where we are going" color="textred" />
              <Divider color="bgred" />
            </div>
            <HeadingOne title="Our Mission & Vision" color="textblack" />
          </div> */}

      <div className=" container mission-container flex gap">
        <div className="vision">
          <div className="missioncard flex-column item-center">
            <HeadingTwo title="Our Vision" color="textblack" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius iure ratione repudiandae repellat, nostrum eaque, asperiores
              nemo aspernatur laboriosam beatae aliquid? Amet, repellendus
              obcaecati.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="missioncard flex-column item-center">
            <HeadingTwo title="Our Mission" color="textblack" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius iure ratione repudiandae repellat, nostrum eaque, asperiores
              nemo aspernatur laboriosam beatae aliquid? Amet, repellendus
              obcaecati.
            </p>
          </div>
        </div>
      </div>
      {/* </div>
      </section> */}
    </>
  );
};

export default Mission;
