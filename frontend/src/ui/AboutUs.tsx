import Container from "./Container";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { FaLongArrowAltRight, FaRegStar } from "react-icons/fa";
import { About } from "../../public/images";
import HeadingThree from "./HeadingThree";
import Divider from "./Divider";
import HeadingOne from "./HeadingOne";
import Button from "./Button";

const AboutUs = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[30%] bg-DarkRed rounded-2xl px-6 pb-6">
        <img
          src={About}
          alt=""
          className="mt-[-13px] shadow-lg rounded-xl border-DarkRed border"
        />
        <br />
        <div className="flex items-center text-xl font-bold justify-center text-white">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="ml-3">Executives16</span>
          <sup>
            <PiTrademarkRegisteredFill />
          </sup>
        </div>
      </div>

      <div className="lg:w-[70%] w-full">
        <div className="flex items-center">
          <HeadingThree title="Who We Are" className="text-DarkRed" />
          <Divider className="bg-DarkRed" />
        </div>
        <HeadingOne
          title="Bus-Admin Class of 2016"
          className="text-Black mb-3"
        />
        <p className="textjustify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. x Molestiae,
          quaerat. Eum dicta tempora quae reprehenderit nam quam alias. Quisquam
          facere saepe minus officia nesciunt explicabo magni quibusdam earum
          aspernatur. Consequatur aut, alias, voluptatem quae at officiis quidem
          quasi, vitae cum veritatis placeat sunt nam vel enim! Placeat nulla
          eos, vel vitae dolore asperiores optio dignissimos, aliquam animi
          possimus a quisquam totam reiciendis dicta facere earum aliquid ipsam
          cupiditate ullam fugiat? Excepturi modi delectus eum animi, mollitia
          impedit incidunt autem eaque natus quos, rem est dolorum ratione
          ducimus porro explicabo sed, accusantium assumenda dicta dolorem!
          Architecto rerum fugit quod dolore unde.
        </p>
        <Button
          title="Learn More"
          path="/about"
          className="bg-DarkRed text-white inline-flex mt-5"
          icon={<FaLongArrowAltRight />}
        />
      </div>
    </Container>
  );
};

export default AboutUs;
