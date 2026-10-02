import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20 grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
