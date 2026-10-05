import "./App.css";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";

import ArticleDetails from "./pages/ArticleDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home></Home> },
      { path: "blog", element: <Blog></Blog> },
      { path: "blog/:slug", element: <ArticleDetails /> },
      { path: "about", element: <About></About> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
