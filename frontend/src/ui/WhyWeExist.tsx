import Container from "./Container";
import HeadingThree from "./HeadingThree";
import Divider from "./Divider";
import HeadingOne from "./HeadingOne";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Things } from "../../public/images";

const WhyWeExist = () => {
  return (
    <div className="w-full bg-DarkRed">
      <Container className="flex flex-col items-center gap-10 lggap-20 lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <div className="flex items-center">
            <HeadingThree title="Why We Still Exist" className="text-white" />
            <Divider className="bg-white" />
          </div>
          <HeadingOne title="Things We Do In Common" className="text-white" />
          <br />
          <p className="text-white text-justify">
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
            className="bg-white text-DarkRed inline-flex"
          />
        </div>

        <div className="w-full lg:w-[40%]">
          <div className="imgBox">
            <img src={Things} alt="" className="object-cover rounded-[50%]" />
            {/* <div className="playBox">
              <FaPlay />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyWeExist;
