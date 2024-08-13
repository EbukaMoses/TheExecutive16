import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/pages/About/About";
import Blog from "./components/pages/Blog/Blog";
import BlogDetails from "./components/pages/Blog/BlogDetails";
import Market from "./components/pages/Market/Market";
import Team from "./components/pages/Team/Team";
import Heroes from "./components/pages/Heroes/Heroes";
import Contact from "./components/pages/Contact/Contact";
import MarketDetail from "./components/pages/Market/MarketDetail";
import TeamDetail from "./components/pages/Team/TeamDetail";
import Login from "./components/pages/Login/Login";
import Gallery from "./components/pages/Gallery/Gallery";
import TabAbout from "./components/pages/Team/TabAbout";
import TabEdu from "./components/pages/Team/TabEdu";
import TabBiz from "./components/pages/Team/TabBiz";
import TabHobby from "./components/pages/Team/TabHobby";
import TabConnect from "./components/pages/Team/TabConnect";
import TabBlog from "./components/pages/Team/TabBlog";
import TeamTabLayOut from "./components/pages/Team/TeamTabLayOut";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetails />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market-detail" element={<MarketDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/team-member" element={<TeamTabLayOut />} /> */}
          {/* <Route path="/team-member" element={<TeamDetail />} /> */}
          <Route path="/team-member" element={<TabAbout />} />
          <Route path="/team-member/education" element={<TabEdu />} />
          <Route path="/team-member/business" element={<TabBiz />} />
          <Route path="/team-member/hobby" element={<TabHobby />} />
          <Route path="/team-member/connect" element={<TabConnect />} />
          <Route path="/team-member/blog" element={<TabBlog />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/member" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
