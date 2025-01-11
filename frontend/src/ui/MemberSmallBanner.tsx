// import { useEffect } from "react";
import { Favicon } from "../../public/images";
// import { getData } from "../lib";
import { Link } from "react-router-dom";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const members = [
  {
    id: 1,
    name: "Ebuka",
    image: Favicon,
  },
  {
    id: 2,
    name: "John",
    image: Favicon,
  },
  {
    id: 3,
    name: "James",
    image: Favicon,
  },
  {
    id: 4,
    name: "Rita",
    image: Favicon,
  },
  {
    id: 5,
    name: "Ebele",
    image: Favicon,
  },
  {
    id: 6,
    name: "Eze",
    image: Favicon,
  },
  {
    id: 7,
    name: "Mike",
    image: Favicon,
  },
  {
    id: 8,
    name: "Tobe",
    image: Favicon,
  },
  {
    id: 9,
    name: "Uzo",
    image: Favicon,
  },
];

const MemberSmallBanner = () => {
  //   const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const endpoint = `${config?.baseUrl}/categories`;
  //       try {
  //         const data = await getData(endpoint);
  //         setCategories(data);
  //       } catch (error) {
  //         console.error("Error fetching data", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div className="w-full border-b-2 border-t-2 border-red-800 shadow-lg bg-LightGray">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={1000}
        className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {members.map((item) => (
          <Link
            key={item?.id}
            to={`category/${item?.id}`}
            className="flex items-center whitespace-nowrap gap-3 py-3 px-6 border border-gray-100 mr-1 flex-1 rounded-md hover:border-DarkGray hover:shadow-lg bg-white"
          >
            <img
              src={item?.image}
              alt="categoryImage"
              className="w-8 z-10 rounded-full object-cover"
            />
            <p className="text-sm font-semibold text-black">
              {" "}
              {item?.name} Okoye
            </p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default MemberSmallBanner;
