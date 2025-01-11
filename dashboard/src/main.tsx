import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Layout from "./ui/Layout.tsx";
import Profile from "./page/Profile.tsx";
import Editprofile from "./page/Editprofile.tsx";
import Business from "./page/Business.tsx";
import Post from "./page/Post.tsx";
import Testimony from "./page/Testimony.tsx";
import NotFound from "./page/NotFound.tsx";
import Addpost from "./page/Addpost.tsx";
import Editpost from "./page/Editpost.tsx";
import Viewpost from "./page/Viewpost.tsx";
import Addcategory from "./page/Addcategory.tsx";
import Addtestimony from "./page/Addtestimony.tsx";
import Suggestion from "./page/Suggestion.tsx";
import Member from "./page/member.tsx";
import Viewmember from "./page/Viewmember.tsx";
import Editmember from "./page/Editmember.tsx";
import Password from "./page/Password.tsx";

const RouterLayout = () => {
  return (
    <Layout>
    <ScrollRestoration />
      <Outlet />
    </Layout>
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/editprofile",
        element: <Editprofile />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "postcategory",
        element: <Addcategory />,
      },
      {
        path: "postcategory/:id",
        element: <Addcategory />,
      },
      {
        path: "viewpost",
        element: <Viewpost />,
      },
      {
        path: "editpost",
        element: <Editpost />,
      },
      {
        path: "addpost",
        element: <Addpost />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "addtestimony",
        element: <Addtestimony />,
      },
      {
        path: "addtestimony/:id",
        element: <Addtestimony />,
      },
      {
        path: "suggestion",
        element: <Suggestion />,
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "member/:id",
        element: <Viewmember />,
      },
      {
        path: "memberedit/:id",
        element: <Editmember />,
      },
      {
        path: "password",
        element: <Password />,
      },
      // {
      //   path: "",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: < />,
      // },
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
