import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-teal-500 font-semibold"
      : "text-gray-600 hover:text-teal-500 transition";

  return (
    <header className="w-full bg-[#00CBB8] border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-teal-400 rotate-45 flex items-center justify-center">
            <span className="-rotate-45 font-bold text-sm text-teal-400">
              TOTC
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/careers" className={linkClass}>Careers</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
            <button className="w-[160px] h-15 bg-[#FFFFFF] rounded-[80px]">Login</button>
            <button>Sign Up</button>
        </div>

      </div>
    </header>
  );
}
