import React from "react";
import HeadingThree from "../../common/Headings/HeadingThree";
import Divider from "../../common/Button/Divider";
import HeadingOne from "../../common/Headings/HeadingOne";
import Button from "../../common/Button/Button";
import things from "/images/things.jpg";
import { FaPlay, FaLongArrowAltRight } from "react-icons/fa";

const WhyWe = () => {
  return (
    <section className="whywe">
      <div className="container  padding flex gap">
        <div className="leftSide">
          <div className="Hflex">
            <HeadingThree title="Why We Still Exist" color="textwhite" />
            <Divider color="bgwhite" />
          </div>
          <HeadingOne title="Things We Do In Common" color="textwhite" />
          <br />
          <p className="textwhite textjustify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cumque
            sint provident voluptates iusto architecto quisquam quis
            exercitationem autem rerum nemo, sapiente magnam laudantium aperiam
            excepturi commodi sed eveniet? Quo animi consequatur distinctio
            corporis fuga iste vel beatae! Modi, impedit voluptatibus. Nemo
            dolorem libero veritatis quisquam quae ut molestias, delectus odit
            voluptates, qui ipsum nihil id tenetur sit voluptatem est facere
            nulla? Ullam repellendus fuga, nesciunt minus aspernatur nostrum
            maxime perferendis minima amet tempora ab exercitationem provident
            in deserunt expedita blanditiis numquam, magnam dignissimos illo cum
            delectus recusandae asperiores eum adipisci! Hic cumque enim eius
            perferendis minima asperiores error dicta?
          </p>
          <br />
          <br />
          <Button
            title="View More"
            path="/about"
            icon={<FaLongArrowAltRight />}
            bg="trans"
          />
        </div>

        <div className="rightSide">
          <div className="imgBox">
            <img src={things} alt="" />
            {/* <div className="playBox">
              <FaPlay />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
