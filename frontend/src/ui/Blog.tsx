import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import BlogCard from "./BlogCard";
import { BlogImg } from "../../public/images";
import Container from "./Container";
import { useLocation } from "react-router-dom";

const Blog = ({ className }: any) => {
  const location = useLocation();
  return (
    <div className={className ? className : "w-full bg-LightGray"}>
      <Container className="">
        {location.pathname === "/" && (
          <div className="flex-column justify-center item-center">
            <div className="flex items-center justify-center">
              <Divider className="bg-DarkRed" />
              <HeadingThree title="Blog News" className="text-DarkRed" />
              <Divider className="bg-DarkRed" />
            </div>
            <HeadingOne
              title="News Articule!"
              className="text-black text-center mb-10"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogCard
            id="1"
            img={BlogImg}
            category="Business"
            title="The State of the class and it's members"
            author="Ebuka Moses"
            date="july 24, 2024"
          />

          <BlogCard
            id="2"
            img={BlogImg}
            category="Business"
            title="The State of the class and it's members"
            author="Ebuka Moses"
            date="july 24, 2024"
          />

          <BlogCard
            id="3"
            img={BlogImg}
            category="Business"
            title="The State of the class and it's members"
            author="Ebuka Moses"
            date="july 24, 2024"
          />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
