import InnerBanner from "../ui/InnerBanner";
import { FaNewspaper } from "react-icons/fa";
import Container from "../ui/Container";
import { BlogImg } from "../../public/images";
import BlogCard from "../ui/BlogCard";
import { useLocation } from "react-router-dom";
import BlogDetailCard from "../ui/BlogDetailCard";

const Article = () => {
  const location = useLocation();
  return (
    <div>
      <InnerBanner title="Blog" icon={<FaNewspaper />} />
      <Container>
        {location.pathname !== "/article" ? (
          <BlogDetailCard />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <BlogCard
              id="4"
              img={BlogImg}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
            <BlogCard
              id="5"
              img={BlogImg}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />

            <BlogCard
              id="6"
              img={BlogImg}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />

            <BlogCard
              id="7"
              img={BlogImg}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
            <BlogCard
              id="8"
              img={BlogImg}
              category="Business"
              title="The State of the class and it's members"
              author="Ebuka Moses"
              date="july 24, 2024"
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Article;
