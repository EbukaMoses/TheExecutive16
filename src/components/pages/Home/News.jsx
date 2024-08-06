import React from "react";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";
import blog from "/images/blog.jpg";
import NewCard from "../../common/NewCard";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section className="bggray">
      <div className="container-10 padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Blog News" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="News Articule!" color="textblack" />
        </div>
        <div className="newscontent grid3">
          <Link to="/blog-detail">
            <NewCard
              img={blog}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
          </Link>
          <Link to="/blog-detail">
            <NewCard
              img={blog}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
          </Link>
          <Link to="/blog-detail">
            <NewCard
              img={blog}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
