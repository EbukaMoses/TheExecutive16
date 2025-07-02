
import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import { AiFillPicture } from "react-icons/ai";

const Gallery = () => {
  return (
    <div>
      <InnerBanner title="Our Gallery" icon={<AiFillPicture />} />
      <Container>---No Gallery---</Container>
    </div>
  );
};

export default Gallery;
