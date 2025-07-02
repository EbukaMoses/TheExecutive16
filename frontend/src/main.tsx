import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Layout from "./ui/Layout.tsx";
import About from "./pages/About.tsx";
import Market from "./pages/Market.tsx";
import Gallery from "./pages/Gallery.tsx";
import Members from "./pages/Members.tsx";
import Heros from "./pages/Heros.tsx";
import Article from "./pages/Article.tsx";
import Contact from "./pages/Contact.tsx";
import Account from "./pages/Account.tsx";
import NotFound from "./pages/NotFound.tsx";

const RouterLayout = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/market/:id",
        element: <Market />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/member",
        element: <Members />,
      },
      {
        path: "/member/:id",
        element: <Members />,
      },
      {
        path: "/heros",
        element: <Heros />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
