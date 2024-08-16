import { useState } from "react";
import { APP_BASE_URL } from "../constants/Config";
import { Link } from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";
import CrossIcon from "../assets/svg-icons/CrossIcon";
import MenuIcon from "../assets/svg-icons/MenuIcon";

const classNames = {
  onHoverLink: "hover:bg-accent hover:text-black rounded-xl p-3",
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNav = () => {
    setIsVisible(!isVisible);
  };
  const navItems = [
    { label: "Home", to: APP_BASE_URL },
    { label: "About", to: `${APP_BASE_URL}/about` },
    { label: "Contact", to: `${APP_BASE_URL}/contact` },
  ];

  return (
    <div className="flex justify-between items-center h-20 px-4 bg-neutral text-white">
      <Link
        className={classNames.onHoverLink}
        id="desktop-logo"
        to={APP_BASE_URL}
      >
        <h1 className="w-full text-xl md:text-3xl font-bold">
          React + TypeScript
        </h1>
      </Link>
      <ul id="desktop-nav-items" className="hidden md:flex md:items-center">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`p-4 rounded-xl m-2 cursor-pointer duration-300 ${classNames.onHoverLink}`}
          >
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
        <li className="p-2 rounded-xl m-2 cursor-pointer flex items-center">
          <ThemeToggle className="w-10 h-10" />
        </li>
      </ul>
      <div
        id="mobile-nav-toggle"
        onClick={toggleNav}
        className="block md:hidden"
      >
        {isVisible ? <CrossIcon /> : <MenuIcon />}
      </div>
      <ul
        id="mobile-nav-items"
        className={
          isVisible
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-neutral"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <div className="flex items-center justify-around p-3 gap-x-3">
          <Link
            className={classNames.onHoverLink}
            id="mobile-logo"
            to={APP_BASE_URL}
          >
            <h1 className="w-full font-bold text-xl">React + TypeScript</h1>
          </Link>
          <ThemeToggle className="w-8 h-8" />
        </div>
        {navItems.map((item) => (
          <li
            onClick={toggleNav}
            key={item.to}
            className={`p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600 ${classNames.onHoverLink}`}
          >
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
