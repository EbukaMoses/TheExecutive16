import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";
import Aside from "./Aside";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [hamburger, setHamburger] = useState(true);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div>
      <Header toggleHamburger={toggleHamburger} />
      <div className="flex w-full">
        <Aside hamburger={hamburger} toggleHamburger={toggleHamburger} />
        {/* <div className="flex-1 p-5 box-border w-full">{children}</div> */}
        <div
          className={`absolute pb-20 pt-10 p-5 top-[60px] ${!hamburger ? "left-0 right-0 w-full" : "md:left-[16%] md:w-[84%]"
            }`}
        >
          {children}
        </div>
      </div>
      <Footer />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </div>
  );
};

export default Layout;
