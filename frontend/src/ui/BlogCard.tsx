import { FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeadingThree from "./HeadingThree";

const BlogCard = ({ id, img, category, title, author, date }: any) => {
  return (
    <>
      <Link
        to={`/article/${id}`}
        className="overflow-hidden bg-white w-[100%] shadow-2xl"
      >
        <div className="overflow-hidden relative">
          <img src={img} alt="blog" className="w-full object-cover" />
          <Link
            to="/"
            className="absolute right-0 bottom-0 bg-red-600 py-1 px-3 text-white text-center font-bold"
          >
            {category}
          </Link>
        </div>
        <div className="p-4">
          <HeadingThree title={title} className="line-clamp-2" />
          <ul className="flex justify-between mt-4">
            <li className="flex items-center gap-2 text-[12px]">
              <FaCalendarDays /> {date}
            </li>
            <li>
              <Link
                to={`/member/${{ id }}`}
                className="flex items-center gap-2 text-[12px]"
              >
                <FaUser /> {author}
              </Link>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
