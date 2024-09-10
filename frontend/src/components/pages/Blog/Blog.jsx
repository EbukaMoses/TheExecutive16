import React from "react";
import InnerPage from "../../common/InnerHero/InnerPage";
import News from "../Home/News";
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section>
      <InnerPage title="Blog" icon={<FaNewspaper />} />

      <Link to="/blog-detail">
        <News />
      </Link>
    </section>
  );
};

export default Blog;
