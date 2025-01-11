
import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import { AiFillPicture } from "react-icons/ai";

const Photos = () => {
  return (
    <div>
      <InnerBanner title="Our Gallery" icon={<AiFillPicture />} />
      <Container>---No Photos---</Container>
    </div>
  );
};

export default Photos;
