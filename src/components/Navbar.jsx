import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar({ variant = "guest" }) {
  const isGuest = variant === "guest";

  return (
    <header
      className={`w-full ${
        isGuest ? "bg-[#00CBB8] text-white" : "bg-white text-gray-700 border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-bold text-xl">TOTC</div>

        {/* LINKS */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>

        {/* RIGHT */}
        {isGuest ? (
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-white text-teal-500 rounded-full">
              Login
            </button>
            <button className="px-6 py-2 bg-teal-600 text-white rounded-full">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span>Lina</span>
            <ChevronDown size={16} />
          </div>
        )}
      </div>
    </header>
  );
}
