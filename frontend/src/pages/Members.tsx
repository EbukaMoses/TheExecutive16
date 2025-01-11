import InnerBanner from "../ui/InnerBanner";
import Container from "../ui/Container";
import MemberCard from "../ui/MemberCard";
import { FaUsers } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import MemberDetailCard from "../ui/MemberDetailCard";

const Members = () => {
  const location = useLocation();
  return (
    <div>
      <InnerBanner title="Our Members" icon={<FaUsers />} />
      <Container>
        {location.pathname === "/member" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
        ) : (
          <MemberDetailCard />
        )}
      </Container>
    </div>
  );
};

export default Members;
