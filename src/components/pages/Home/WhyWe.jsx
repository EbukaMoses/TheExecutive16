import React from "react";
import HeadingThree from "../../common/HeadingThree";
import Divider from "../../common/Divider";
import HeadingOne from "../../common/HeadingOne";
import Button from "../../common/Button";
import whyus from "/images/whyus.jpg";
import { FaPlay, FaLongArrowAltRight } from "react-icons/fa";

const WhyWe = () => {
  return (
    <section className="bggray mt">
      <div className="container whywe padding flex">
        <div className="leftSide">
          <div className="Hflex">
            <HeadingThree title="Why We Still Exist" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Things We Do In Common" color="textblack" />
          <p>
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
            bg="bgred"
          />
        </div>

        <div className="rightSide">
          <div className="imgBox">
            <img src={whyus} alt="" />
            <div className="playBox">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
