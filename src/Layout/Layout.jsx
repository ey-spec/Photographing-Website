import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pt-20 grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
