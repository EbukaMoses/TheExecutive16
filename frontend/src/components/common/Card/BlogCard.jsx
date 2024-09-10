import React from "react";
import { FaCalendarDays, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ img, category, title, author, date }) => {
  return (
    <div>
      <div className="news-card mt-30 wow fadeInUp  animated">
        <Link to="/blog-detail">
          <div className="news-thumb">
            <img src={img} alt="blog" />
            <Link to="/">{category}</Link>
          </div>
          <div className="news-content">
            <h4 class="title">{title}</h4>
            <ul>
              <li>
                <FaCalendarDays /> {date}
              </li>
              <li>
                <Link to="/team-member">
                  <FaUser /> {author}
                </Link>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
