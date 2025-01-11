import { MdContacts } from "react-icons/md";
import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTelegramPlane,
  FaUser,
} from "react-icons/fa";
import {
  FaMessage,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div>
      <InnerBanner title="Get Intouch" icon={<MdContacts />} />
      <Container className="flex flex-col lg:flex-row gap-[10%]">
        <div className="lg:w-[60%] w-full p-7 shadow-lg">
          <h3 className="text-3xl font-bold mb-5 italic">Holla Us!</h3>
          <form>
            <div className="flex items-center relative w-full border-2 border-[#e5e5e5] mb-4 py-[2px] px-3 rounded">
              <FaUser className="text-DarkGray" />
              <input
                type="text"
                value=""
                placeholder="Full name"
                className="w-full outline-none border-0 py-2 px-0 ml-1"
              />
            </div>
            <div className="flex items-center relative w-full border-2 border-[#e5e5e5] mb-4 py-[2px] px-3 rounded">
              <FaEnvelope className="text-DarkGray" />
              <input
                type="text"
                value=""
                placeholder="Email Address"
                className="w-full outline-none border-0 py-2 px-0 ml-1"
              />
            </div>
            <div className="flex items-center relative w-full border-2 border-[#e5e5e5] mb-4 py-[2px] px-3 rounded">
              <FaPhoneSquareAlt className="text-DarkGray" />
              <input
                type="text"
                value=""
                placeholder="Phone Number"
                className="w-full outline-none border-0 py-2 px-0 ml-1"
              />
            </div>
            <div className="flex items-center relative w-full border-2 border-[#e5e5e5] mb-4 py-[2px] px-3 rounded">
              <FaMessage className="text-DarkGray absolute top-[16px]" />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full outline-none border-0 py-2 px-0 ml-1 resize-none h-[200px] pl-4"
              ></textarea>
            </div>
            <Button
              title="Submit"
              path="/"
              icon={<FaTelegramPlane />}
              className="bg-DarkRed text-white inline-flex"
            />
          </form>
        </div>

        <div className="right">
          <ul className="mt-[60px] p-0 list-none justify-between flex flex-col">
            <li className="block text-lg font-semibold">
              <a
                href="tel:+2347038689968"
                className="text-black flex items-center gap-2"
              >
                <FaSquarePhone />
                07038689968
              </a>
            </li>
            <li className="block text-lg font-semibold">
              <a
                href="mailto:executive16@gmail.com"
                className="text-black flex items-center gap-2"
              >
                <FaEnvelope />
                executive16@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex mt-4 gap-3">
            <a href="/" className="text-3xl">
              <FaSquareFacebook />
            </a>
            <a href="/" className="text-3xl">
              <FaSquareInstagram />
            </a>
            <a href="/" className="text-3xl">
              <FaSquareXTwitter />
            </a>
            <a href="/" className="text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
