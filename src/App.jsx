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
          <Route path="/team" element={<Team />} />
          <Route path="/team-member" element={<TeamDetail />} />
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
