import { Logo2 } from "../../public/images";
import HeadingTwo from "./HeadingTwo";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePhone,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative">
      <section className="w-full bg-[#141414] pt-[6%]">
        <div className="ml-[10%] mr-[10%]">
          <div className="lg:grid-cols-4 md:grid-cols-2 gird-cols-1 grid gap-6">
            <div className="text-LightGray">
              <div className="">
                <img
                  src={Logo2}
                  alt="The Executive 16"
                  className="w-[70%] mb-2"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
                diam nonu mmy nibh euismod tincid
              </p>
            </div>
            <div className="text-LightGray">
              <HeadingTwo title="Address" className="text-white mb-2" />
              <ul>
                <li>
                  <a href="/" className="text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="/">Market Place</a>
                </li>
                <li>
                  <a href="/">Members</a>
                </li>
                <li>
                  <a href="/">Gallery</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="text-LightGray">
              <HeadingTwo title="Address" className="text-white mb-2" />
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Market Place</a>
                </li>
                <li>
                  <a href="/">Members</a>
                </li>
                <li>
                  <a href="/">Gallery</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="text-LightGray">
              <HeadingTwo title="Hola Us!" className="text-white mb-2" />
              <ul className="flex flex-col gap-3">
                <li className="text-sm block text-LightGray">
                  <a href="/" className="flex items-center gap-2">
                    <FaEnvelope />
                    executive16@gmail.com
                  </a>
                </li>
                <li className="text-sm block text-LightGray">
                  <a href="/" className="flex items-center gap-2">
                    <FaSquarePhone />
                    07038689968
                  </a>
                </li>
              </ul>
              <div className="flex mt-3">
                <a href="/" className="text-LightGray mr-3 text-[20px]">
                  <FaSquareFacebook />
                </a>
                <a href="/" className="text-LightGray mr-3 text-[20px]">
                  <FaSquareInstagram />
                </a>
                <a href="/" className="text-LightGray mr-3 text-[20px]">
                  <FaSquareXTwitter />
                </a>
                <a href="/" className="text-LightGray mr-3 text-[20px]">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div className="flex justify-center items-center text-white text-[11px] pt-4 pb-4">
            <span className="text-center">
              copyright &copy; Unziki Business Administration class of 2016.
              Built by {" "}
              <a href="" className="text-[#868080]">
                Ebuka Moses
              </a>
              {" "}
              in loving memory of {" "}
              <a href="" className="text-[#868080]">
                Pokapikin
              </a>
            </span>
          </div>
        </div>
        <div className="mr-[7%] ml-[7%] footer-popup">
          <div className="hidden relative p-5 gap-5 border-4 border-white rounded-md">
            {/* <img src={poka} alt="" className="w-24 h-24" /> */}
            <p className="text-black text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quod error dignissimos. Amet tenetur voluptate quis autem beatae
              pariatur? Autem nobis ex explicabo? Incidunt dolores rerum dolorum
              aperiam dolorem asperiores, dignissimos minus eaque, esse maiores
              in! Quas vel necessitatibus libero ratione id aliquid, dicta
              voluptatem, explicabo architecto mollitia impedit voluptas sequi
              asperiores amet deleniti commodi debitis quis est facere dolorem
              ut magnam eum soluta! Rerum aperiam quaerat magnam unde
              dignissimos ex optio, nobis deleniti, sint cupiditate incidunt
              quidem. Id quo sunt adipisci, cum cumque numquam mollitia
              consectetur illo, eos alias dolor modi tempore eius, enim eum sint
              aperiam? Illo, quibusdam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
