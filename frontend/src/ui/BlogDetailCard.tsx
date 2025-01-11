import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Quote } from "../../public/images";
import { BlogImg } from "../../public/images";
import BlogCard from "./BlogCard";

const BlogDetailCard = () => {
  const blog = [
    {
      id: 1,
      img: BlogImg,
      category: "Business",
      title: "The State of the class and it's members",
      author: "Ebuka Moses",
      date: "july 24 2024",
    },
    {
      id: 2,
      img: BlogImg,
      category: "Business",
      title: "The State of the class and it's members",
      author: "Ebuka Moses",
      date: "july 24 2024",
    },
    {
      id: 3,
      img: BlogImg,
      category: "Business",
      title: "The State of the class and it's members",
      author: "Ebuka Moses",
      date: "july 24 2024",
    },
  ];
  return (
    <div className="flex gap-10">
      <div className="w-full lg:w-[70%] overflow-hidden p-6 shadow-2xl">
        <div className="w-full">
          <img
            src={Quote}
            alt=""
            className="w-full object-cover object-center"
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-1 italic font-bold text-lg">
            <Link to="/team-member" className="flex items-center gap-2">
              <FaRegUser /> Ebuka Moses
            </Link>
          </div>
          <div className="flex items-center gap-1 italic text-sm">
            <FaRegCalendarAlt /> 18 July, 2023
          </div>
        </div>
        <div className="mt-5">
          <h1 className="capitalize text-4xl mb-5 font-extrabold">
            The State of the class and it's members
          </h1>
        </div>
        <div className="text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            vel obcaecati dolorem ducimus, ipsum vero autem quo assumenda,
            repellat animi necessitatibus tempora? Aut accusamus odio suscipit,
            iure quasi qui fugit aspernatur dolorum a ullam? Blanditiis
            consectetur odio fugiat aliquam, vero animi quod consequatur
            eligendi cumque incidunt temporibus mollitia, tempora ea officiis
            veritatis! Atque omnis sunt ratione nostrum magni est eos dolorem
            quae! Qui fugiat quae sint. At exercitationem cumque ipsam beatae
            id! Vel odio, asperiores, corporis consequatur maxime cum, veniam
            reiciendis rerum molestias laboriosam quibusdam officia! Possimus
            est quisquam tempora facilis ratione voluptatibus vero numquam
            corporis dolores accusantium officiis amet pariatur, quod reiciendis
            magnam quasi! Eos officia magnam soluta autem inventore, similique
            exercitationem. Atque reprehenderit, culpa alias quibusdam at
            perspiciatis delectus dolorem voluptatem tempore nihil eveniet
            eligendi in. Harum soluta, iure cumque esse quae, enim repudiandae,
            dolorum ab delectus excepturi animi. Dolorem corrupti molestiae
            aspernatur laudantium assumenda corporis libero, dicta sint,
            provident fugiat ea perspiciatis pariatur tempore necessitatibus.
            Quisquam eligendi commodi corporis quia, praesentium repellendus
            natus numquam laboriosam facilis ipsa sapiente! Alias, vitae nam,
            laboriosam ipsam fuga laudantium velit possimus quis facilis
            temporibus culpa nobis corrupti natus necessitatibus consequuntur
            quos obcaecati id cum, labore dolorum. Perspiciatis dolores, minus
            consequatur ratione placeat veniam quidem. Deserunt optio voluptatem
            sapiente fuga repellendus temporibus ut iusto aut atque obcaecati
            quibusdam tempore harum, totam nihil corrupti nesciunt, sit sunt
            numquam nam aliquid? Beatae accusantium possimus, ea eius
            reprehenderit veniam consequuntur placeat dolores maxime expedita
            aliquam minima dignissimos reiciendis error sapiente consequatur
            aspernatur incidunt fugit nulla?
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-5 mt-5">
        {blog.map(({ id, img, category, title, author, date }: any) => (
          <BlogCard
            id={id}
            img={img}
            category={category}
            title={title}
            author={author}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailCard;
