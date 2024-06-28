import React from "react";
import "./Team.css";
import InnerPage from "../../common/InnerPage";
import izzy2 from "/images/izzy2.jpg";
import { IoMdLocate } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import {
  FaSquarePhone,
  FaRegEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const TeamDetail = () => {
  return (
    <section>
      <InnerPage title="Meet kalu Ezekiel" icon={true} />
      <div className="container padding">
        <div className="member-card">
          <div className="img">
            <img src={izzy2} alt="" />

            <div className="contact">
              <a href="">
                <MdOutlinePhoneAndroid />
                07038689968
              </a>
              <a href="">
                <FaRegEnvelope />
                executive16@gmail.com
              </a>
              <a href="">
                <IoMdLocate />
                Abuja
              </a>
            </div>
<hr className="hr" />
            <div className="socials">
              <a href="/">
                <FaSquareFacebook />
              </a>
              <a href="/">
                <FaSquareInstagram />
              </a>
              <a href="/">
                <FaSquareXTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="desc">
            <h1>
              <FaRegUser />
               Kalu Izzy
            </h1>
            <h4>
              <SlBriefcase /> Software Developer
            </h4>
            <br /> <hr /> <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              iusto, magnam eos iste accusantium harum, rem quo corrupti sed qui
              reiciendis! Deserunt quia incidunt excepturi, totam quidem ipsa
              delectus alias dignissimos exercitationem at deleniti pariatur id
              rerum vero laborum, voluptas labore molestias velit molestiae
              reprehenderit! Laborum dolor repellat libero saepe, tempora
              expedita iste iusto magnam qui eius labore, beatae nulla, dolore
              ad? Expedita sunt, repellendus excepturi, illum quis, laboriosam
              perspiciatis a vel cum nemo ullam. Ex quidem porro molestiae vel
              veniam optio explicabo temporibus quisquam voluptatem cum
              necessitatibus voluptates id odio perspiciatis nam veritatis,
              ipsam natus? Nobis odit numquam, placeat excepturi magni, quia
              dolorum repudiandae voluptate, ex cumque tempore. Sint eos enim
              hic iure deserunt earum praesentium incidunt deleniti officia quod
              nihil aspernatur delectus voluptates magnam distinctio modi odio
              inventore, veritatis harum ullam iusto soluta sunt. Perferendis
              autem reprehenderit amet id odio eaque, assumenda molestias minima
              quasi necessitatibus, enim voluptatum tenetur minus quaerat illum
              officiis odit nam, praesentium laboriosam error est non explicabo.
              Autem rerum nesciunt, exercitationem voluptatibus tempore deleniti
              aspernatur modi asperiores natus dolor eveniet quae quidem
              molestias veniam praesentium commodi eos repellat officiis eaque
              voluptates, dolorem porro! Fugit labore aliquid dolorem assumenda
              dignissimos asperiores esse repellat officiis cum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;
