import { Link } from "react-router-dom";
import HeadingTwo from "./HeadingTwo";

const BusinessCard = ({ id, flyer, title, subtitle }: any) => {
  return (
    <Link
      to={`/market/${id}`}
      className="border-DarkGray border-2  overflow-hidden bg-white shadow-lg"
      key={id}
    >
      <img src={flyer} alt="" className="object-cover group-hover:scale-110" />
      <div className="flex gap-3 items-center justify-center px-4 py-2">
        {/* <img src={logo} alt={title} className="w-[12%]" /> */}
        <div>
          <HeadingTwo title={title} className="text-black text-center" />
          <span className="text-sm text-center line-clamp-2">{subtitle}</span>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
