import { FaMessage } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const Header = ({ toggleHamburger }: any) => {
  // const handleHamburger = () => {
  //   document.body.classList.toggle("toggle-sidebar");
  // };
  return (
    <div className="fixed top-0 z-50 w-full h-[60px] shadow-lg flex items-center justify-between px-10 bg-white">
      <div className="flex gap-10 items-center">
        <h1 className="font-bold text-Danger mr-4">THE EXECUTIVE 16</h1>
        <TiThMenu
          className="cursor-pointer"
          onClick={() => toggleHamburger()}
        />
      </div>
      <div className="flex gap-4 items-center">
        <MdNotificationsActive className="text-xl cursor-pointer" />
        <FaMessage className="text-l cursor-pointer" />
        <IoMdLogOut className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
