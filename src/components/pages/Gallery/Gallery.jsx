import React from "react";
import "./Gallery.css";
import InnerPage from "../../common/InnerPage";
import { AiFillPicture } from "react-icons/ai"

const Gallery = () => {
  return (
    <section>
      <InnerPage title="Our Memories" icon={<AiFillPicture />} />
      <div className="container padding"></div>
    </section>
  );
};

export default Gallery;
