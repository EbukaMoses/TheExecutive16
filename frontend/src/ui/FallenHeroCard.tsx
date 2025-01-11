import HeadingThree from "./HeadingThree";

const FallenHeroCard = ({
  id,
  image,
  name,
  village,
  state,
  date,
  cause,
  buried,
}: any) => {
  return (
    <div
      className="shadow-xl hover:shadow-lg duration-200 relative border-DarkRed border-4"
      key={id}
    >
      <img
        src={image}
        alt={name}
        className="object-contain w-full duration-300"
      />
      <div className="flex flex-col  absolute bottom-[-72px] left-0 right-0  p-4 bg-DarkRed ">
        <HeadingThree title={name} className="text-white whitespace-nowrap" />
        <span className="italic text-[13px] text-white">
          <span className="font-semibold">Home Town:</span> {village}
        </span>
        <span className="italic text-[13px] text-white">
          <span className="font-semibold">State Of Orign:</span> {state}
        </span>
        <span className="italic text-[13px] text-white">
          <span className="font-semibold">Date of Death:</span> {date}
        </span>
        <span className="italic text-[13px] text-white">
          <span className="font-semibold">Cause of Death: </span>
          {cause}
        </span>
        <span className="italic text-[13px] text-white">
          <span className="font-semibold">Buried on:</span> {buried}
        </span>
      </div>
    </div>
  );
};

export default FallenHeroCard;
