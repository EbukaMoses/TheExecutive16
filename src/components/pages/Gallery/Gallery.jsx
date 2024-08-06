import React from "react";
import "./Gallery.css";
import InnerPage from "../../common/InnerPage";
import { FaShoppingBag } from "react-icons/fa";

const Gallery = () => {
  return (
    <section>
      <InnerPage title="Market Place" icon={<FaShoppingBag />} />
      <div className="container padding"></div>
    </section>
  );
};

export default Gallery;
