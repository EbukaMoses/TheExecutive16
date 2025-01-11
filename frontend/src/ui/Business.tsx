import Container from "./Container";
import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import BusinessCard from "./BusinessCard";
import { BizFlyer, BizFlyer2, BizLogo } from "../../public/images";

const Business = ({className}:any) => {

  const Business = [
    {
      id: 1,
      logo: BizLogo,
      flyer: BizFlyer,
      title: "Gigonest Technology",
      subtitle: "Web Design & Development, Graphic Design",
    },
    {
      id: 2,
      logo: BizLogo,
      flyer: BizFlyer2,
      title: "Gigonest Technology",
      subtitle: "Web Design & Development, Graphic Design",
    },
    {
      id: 3,
      logo: BizLogo,
      flyer: BizFlyer,
      title: "Gigonest Technology",
      subtitle: "Web Design & Development, Graphic Design",
    },
    {
      id: 4,
      logo: BizLogo,
      flyer: BizFlyer2,
      title: "Gigonest Technology",
      subtitle: "Web Design & Development, Graphic Design",
    },
  ];
  return (
    <div className={className ? className : "bg-DarkGray"}>
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <Divider className="bg-DarkRed" />
            <HeadingThree title="Market place" className="text-DarkRed" />
            <Divider className="bg-DarkRed" />
          </div>
          <HeadingOne title="Our Members Business" className="text-black" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {Business.map(({ id, logo, flyer, title, subtitle }: any) => (
            <BusinessCard
              key={id}
              flyer={flyer}
              logo={logo}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Business;
