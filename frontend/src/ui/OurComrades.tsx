import Container from "./Container";
import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import { Ameh, Chukz, Ify, Ihuoma, Izzy, Mike } from "../../public/images";
import HeadingTwo from "./HeadingTwo";

const OurComrades = () => {
  const comrades = [
    {
      id: 1,
      image: Mike,
      name: "Comrade Mike Uchendu",
      post: "Course Rep",
    },
    {
      id: 2,
      image: Ihuoma,
      name: "Comrade Ihuoma Kamalu",
      post: "Ass. Course Rep",
    },
    {
      id: 3,
      image: Chukz,
      name: "Comrade Chukwudi Ifejika",
      post: "Departmental President",
    },
    {
      id: 4,
      image: Ameh,
      name: "Hon. Ameh Joseph",
      post: "(SUG)",
      // post: "Student Representative Council (SUG)",
    },
    {
      id: 5,
      image: Ify,
      name: "Hon. Ifunanya Okoye",
      post: "(SUG)",
    },
    {
      id: 6,
      image: Izzy,
      name: "Comrade Kalu Ezekiel",
      post: "Best Graduating Student",
    },
  ];
  return (
    <Container>
      <div className="whowehave container padding">
        <div className="flex flex-col justify-center item-center">
          <div className="flex items-center mx-auto">
            <Divider className="bg-DarkRed" />
            <HeadingThree title="People We Value" className="text-DarkRed" />
            <Divider className="bg-DarkRed" />
          </div>
          <HeadingOne title="Our MVP " className="text-black mx-auto" />
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {comrades.map(({ id, image, name, post }: any) => (
              <div
                className="shadow-xl hover:shadow-lg group overflow-hidden duration-200 relative border-DarkRed border-4 rounded-2xl"
                key={id}
              >
                <img
                  src={image}
                  alt={name}
                  className="group-hover:scale-110 object-cover duration-300"
                />
                {/* <div className="flex flex-col justify-center items-center mx-auto absolute bottom-0 left-5 right-5 mb-4 p-4 text-center bg-DarkGray rounded-2xl">
                  <HeadingOne title={name} className="text-black" />
                  <HeadingThree title={post} className="text-black" />
                </div> */}
                <div className="absolute z-40 bg-DarkRed bottom-0 left-4 right-4 p-3 rounded-xl flex flex-col justify-center items-center">
                  <HeadingTwo title={name} className="text-white" />
                  <HeadingThree title={post} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurComrades;
