import React from "react";
import "./Blog.css";
import InnerPage from "../../common/InnerPage";
import { FaRegUser } from "react-icons/fa";
import quote from "/images/quote.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import blog from "/images/blog.jpg";
import NewCard from "../../common/NewCard";

const BlogDetails = () => {
  return (
    <section>
      <InnerPage title="Market Place" icon={true} />
      <div className="container blog padding">
        <div className="main-content">
          <div className="img-container">
            <img src={quote} alt="" />
          </div>
          <div className="blog-info">
            <div className="admin">
              <FaRegUser /> Ebuka Moses
            </div>
            <div className="date">
              <FaRegCalendarAlt /> 18 July, 2023
            </div>
          </div>
          <div className="blog-title">
            <h1>The State of the class and it's members</h1>
          </div>
          <div className="blog-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis vel obcaecati dolorem ducimus, ipsum vero autem quo
              assumenda, repellat animi necessitatibus tempora? Aut accusamus
              odio suscipit, iure quasi qui fugit aspernatur dolorum a ullam?
              Blanditiis consectetur odio fugiat aliquam, vero animi quod
              consequatur eligendi cumque incidunt temporibus mollitia, tempora
              ea officiis veritatis! Atque omnis sunt ratione nostrum magni est
              eos dolorem quae! Qui fugiat quae sint. At exercitationem cumque
              ipsam beatae id! Vel odio, asperiores, corporis consequatur maxime
              cum, veniam reiciendis rerum molestias laboriosam quibusdam
              officia! Possimus est quisquam tempora facilis ratione
              voluptatibus vero numquam corporis dolores accusantium officiis
              amet pariatur, quod reiciendis magnam quasi! Eos officia magnam
              soluta autem inventore, similique exercitationem. Atque
              reprehenderit, culpa alias quibusdam at perspiciatis delectus
              dolorem voluptatem tempore nihil eveniet eligendi in. Harum
              soluta, iure cumque esse quae, enim repudiandae, dolorum ab
              delectus excepturi animi. Dolorem corrupti molestiae aspernatur
              laudantium assumenda corporis libero, dicta sint, provident fugiat
              ea perspiciatis pariatur tempore necessitatibus. Quisquam eligendi
              commodi corporis quia, praesentium repellendus natus numquam
              laboriosam facilis ipsa sapiente! Alias, vitae nam, laboriosam
              ipsam fuga laudantium velit possimus quis facilis temporibus culpa
              nobis corrupti natus necessitatibus consequuntur quos obcaecati id
              cum, labore dolorum. Perspiciatis dolores, minus consequatur
              ratione placeat veniam quidem. Deserunt optio voluptatem sapiente
              fuga repellendus temporibus ut iusto aut atque obcaecati quibusdam
              tempore harum, totam nihil corrupti nesciunt, sit sunt numquam nam
              aliquid? Beatae accusantium possimus, ea eius reprehenderit veniam
              consequuntur placeat dolores maxime expedita aliquam minima
              dignissimos reiciendis error sapiente consequatur aspernatur
              incidunt fugit nulla?
            </p>
          </div>
        </div>
        <div className="side-content">
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

export default BlogDetails;
