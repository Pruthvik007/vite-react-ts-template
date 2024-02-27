import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="secondary text-white min-w-full py-1">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center gap-3 md:gap-8">
          <div>
            <Link to="/" className="flex items-center">
              Logo
            </Link>
          </div>
          <div id="primary-nav" className="hidden md:flex items-center">
            {/* Adjusted spacing between links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="p-2 hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <ThemeToggle />
          <div id="mobile-menu-button" className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`${isOpen ? "block" : "hidden"} md:hidden px-1`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block p-2 text-sm hover:bg-gray-700"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
