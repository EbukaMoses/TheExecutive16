import { FaLinkedin, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import Container from "./Container";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { BizFlyer } from "../../public/images";

const BusinessDetailCard = () => {
  return (
    <Container>
      <div className="flex gap-12">
        <img src={BizFlyer} alt="" className="w-[450px]" />
        <div className="market-info">
          <div className="market-name">
            <h1 className="text-[320%] font-[800]">Business name</h1>
            <h4 className="text-[120%] mb-2 font-bold">
              What the Business is into
            </h4>
            <span className="flex items-center text-lg gap-1 font-semibold">
              <FaRegUser /> Ebuka Moses
            </span>
          </div>
          <div className="contact">
            <ul className="flex flex-col">
              <li className="list-none">
                <a
                  href=""
                  className="flex items-center text-lg gap-1 font-semibold"
                >
                  <MdOutlinePhoneAndroid />
                  07038689968
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center text-lg gap-1 font-semibold"
                >
                  <FaRegEnvelope />
                  executive16@gmail.com
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center text-lg gap-1 font-semibold"
                >
                  <IoMdLocate />
                  Abuja
                </a>
              </li>
            </ul>
          </div>
          <div className="flex my-3 gap-3">
            <a href="/" className="text-2xl">
              <FaSquareFacebook />
            </a>
            <a href="/" className="text-2xl">
              <FaSquareInstagram />
            </a>
            <a href="/" className="text-2xl">
              <FaSquareXTwitter />
            </a>
            <a href="/" className="text-2xl">
              <FaLinkedin />
            </a>
          </div>
          <hr />
          <div className="mt-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              qui velit, enim accusantium ratione vitae provident tenetur
              perspiciatis saepe magni aperiam doloremque, at blanditiis libero
              sint ab animi! Quia exercitationem a quam reiciendis modi beatae
              eum eveniet, assumenda sed corrupti natus cupiditate laborum
              neque? Sequi maiores, temporibus exercitationem quia labore cum
              minus reprehenderit facilis quo rerum adipisci quisquam pariatur
              quae quasi corrupti est tempore cumque reiciendis eligendi magni
              fugit, quas nobis. Sapiente autem et omnis. Natus, blanditiis
              aliquam, quod dolor provident esse quidem, quae ex vero veniam
              nisi optio. Esse possimus deserunt praesentium necessitatibus
              molestias voluptas quia fugit ea quod!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BusinessDetailCard;
