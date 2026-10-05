import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/blog", label: "المدونة" },
  { to: "/about", label: "من نحن" },
];
const base =
  "block rounded-full text-sm font-medium transition-all duration-300 py-2.5 px-5 text-neutral-400";
const active = "bg-linear-to-r from-orange-500 to-orange-600 text-white";
const inActive = "hover:bg-[#262626] hover:text-white";

const mobileBase =
  "block rounded-xl border px-5 py-4 text-base font-medium transition-all duration-300";
const mobileActive = "bg-orange-500/10 border-orange-500/30 text-orange-500";
const mobileInActive =
  "border-transparent text-neutral-400 hover:text-white hover:bg-[#262626]";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
        <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center h-20">
          <div>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-transparent bg-linear-to-r from-white to bg-neutral-300 bg-clip-text text-xl font-bold">
                  عدسة
                </span>
                <span className="text-orange-400/80 text-xs hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `${base} ${isActive ? active : inActive}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Link
              to="/blog"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 text-sm"
            >
              ابدأ القراءة
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="القائمة"
            className="md:hidden p-3 text-neutral-400 hover:text-orange-500 transition-colors"
          >
            <i
              className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* mobile links */}
        <div
          inert={!isOpen}
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#262626] bg-[#0a0a0a] px-4 py-4 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `${mobileBase} ${isActive ? mobileActive : mobileInActive}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/blog"
                onClick={close}
                className="mt-2 flex items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white text-sm"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
