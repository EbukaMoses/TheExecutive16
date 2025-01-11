import Container from "./Container";
import Divider from "./Divider";
import HeadingThree from "./HeadingThree";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";

const Mission = () => {
  return (
    <div className="w-full bg-DarkGray">
      <Container>
        <section className="quote">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center">
                <Divider className="bg-white" />
                <HeadingThree
                  title="Our Driving Force"
                  className="text-white"
                />
                <Divider className="bg-white" />
              </div>
              <HeadingOne title="Our Mission & Vision" className="text-white" />
            </div>
        </section>

        <div className=" container mission-container flex flex-col lg:flex-row mt-10 gap-20">
          <div className="shadow-2xl p-10 text-center bg-white">
            <HeadingTwo title="Our Vision" className="text-black mb-3" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius iure ratione repudiandae repellat, nostrum eaque, asperiores
              nemo aspernatur laboriosam beatae aliquid? Amet, repellendus
              obcaecati.
            </p>
          </div>

          <div className="shadow-2xl p-10 text-center bg-white">
            <HeadingTwo title="Our Mission" className="text-black mb-3" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius iure ratione repudiandae repellat, nostrum eaque, asperiores
              nemo aspernatur laboriosam beatae aliquid? Amet, repellendus
              obcaecati.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
