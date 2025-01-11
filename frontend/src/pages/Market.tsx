import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import { BizFlyer, BizFlyer2, BizLogo } from "../../public/images";
import { FaShoppingBag } from "react-icons/fa";
import BusinessCard from "../ui/BusinessCard";
import BusinessDetailCard from "../ui/BusinessDetailCard";
import { useLocation } from "react-router-dom";

const Market = () => {
  const location = useLocation();
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
    <div className="w-full">
      <InnerBanner title="Members Business" icon={<FaShoppingBag />} />
      <Container>
        {location.pathname === "/market" ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {Business.map(({ id, logo, flyer, title, subtitle }: any) => (
              <BusinessCard
                id={id}
                flyer={flyer}
                logo={logo}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </div>
        ) : (
          <BusinessDetailCard />
        )}
      </Container>
    </div>
  );
};

export default Market;
