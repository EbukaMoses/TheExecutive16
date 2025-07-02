import Container from "./Container";
import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import { Derrick, Prince } from "../../public/images";

const Excos = () => {
  const OurExcos = [
    {
      id: 1,
      image: Derrick,
      name: "Derrick Nwankwo",
      position: "President",
    },
    {
      id: 2,
      image: Prince,
      name: "Prince Ndionyenmah",
      position: "Fin. Sec.",
    },
    {
      id: 3,
      image: Prince,
      name: "Prince Ndionyenmah",
      position: "Fin. Sec.",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          <Divider className="bg-DarkRed" />
          <HeadingThree title="Current Executives" className="text-DarkRed" />
          <Divider className="bg-DarkRed" />
        </div>
        <HeadingOne title="working to serve the Unizik-'16-Set community." className="text-black italic" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {OurExcos.map(({ id, image, name, position }: any) => (
          <div
            className="relative w-[350px] h-[350px] group overflow-hidden rounded-2xl border-4 border-DarkRed"
            key={id}
          >
            <img
              src={image}
              alt={name}
              className="objective-cover group-hover:scale-110 duration-200"
            />
            <div className="absolute z-40 bg-DarkRed bottom-0 left-4 right-4 p-3 rounded-xl flex flex-col justify-center items-center">
              <HeadingTwo title={name} className="text-white" />
              <HeadingThree title={position} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Excos;
