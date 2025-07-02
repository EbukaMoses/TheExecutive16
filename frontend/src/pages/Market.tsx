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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
          <div className="bg-white w-80 h-80 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-between p-6">

            {/* Logo */}
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-blue-600 shadow-inner">
              {/* Replace with <img src="/logo.png" alt="logo" className="w-full h-full object-cover rounded-full" /> for real logo */}
              LOGO
            </div>

            {/* Business Name and Tagline */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800">Elite Tech Solutions</h2>
              <p className="text-sm text-gray-500 mt-1">Innovative Software & IT Consulting</p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-gray-600 text-center mt-4">
              <div className="bg-gray-100 px-2 py-1 rounded">Web Dev</div>
              <div className="bg-gray-100 px-2 py-1 rounded">Mobile Apps</div>
              <div className="bg-gray-100 px-2 py-1 rounded">UI/UX</div>
              <div className="bg-gray-100 px-2 py-1 rounded">Cloud</div>
            </div>

            {/* Contact & CTA */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">📍 Lagos, Nigeria</p>
              <p className="text-xs text-gray-500">📞 +234 802 123 4567</p>
              <a
                href="#"
                className="mt-2 inline-block text-sm bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Market;
