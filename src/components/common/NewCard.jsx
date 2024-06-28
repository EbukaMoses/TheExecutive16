import React from 'react'
import { FaCalendarDays, FaUser } from "react-icons/fa6";


const NewCard = ({img, category, title, author, date}) => {
  return (
    <div>
      <div className="news-card mt-30 wow fadeInUp  animated">
        <div className="news-thumb">
          <img src={img} alt="blog" />
                  <a href="#">{ category }</a>
        </div>
        <div className="news-content">
          <a href="#">
            <h4 class="title">{ title }</h4>
          </a>
          <ul>
            <li>
              <a href="#">
                <FaCalendarDays /> { date }
              </a>
            </li>
            <li>
              <a href="#">
                <FaUser /> { author }
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewCard