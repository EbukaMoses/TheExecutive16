import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import { FaHeartBroken } from "react-icons/fa";
import { BizFlyer } from "../../public/images";
import FallenHeroCard from "../ui/FallenHeroCard";

const Heros = () => {
  const hero = [
    {
      id: 1,
      image: BizFlyer,
      name: "Ezemenari Chinedu",
      village: "Nill",
      state: "Anambra",
      date: "21 April 2021",
      cause: "Natural",
      buried: "Nill",
    },
    {
      id: 2,
      image: BizFlyer,
      name: "Mathhew Ugochukwu",
      village: "Nill",
      state: "Anambra",
      date: "Nill",
      cause: "Illness",
      buried: "Nill",
    },
  ];
  return (
    <div>
      <InnerBanner title="Our Love Ones" icon={<FaHeartBroken />} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {hero.map(
            ({ id, image, name, village, state, date, cause, buried }: any) => (
              <FallenHeroCard
                id={id}
                image={image}
                name={name}
                village={village}
                state={state}
                date={date}
                cause={cause}
                buried={buried}
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Heros;
