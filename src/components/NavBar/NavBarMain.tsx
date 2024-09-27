import { useState } from "react";
import KrkLogo from "../../assets/KrkLogo.svg";
import HomeIcon from "../../assets/Home.svg";
import { Link } from "react-router-dom";

const NavBarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Array for menu items and routes
  const menuItems = [
    { name: "WYNIKI", path: "/results" },
    { name: "MAPA", path: "/map" },
    { name: "INFORMACJE", path: "/info" },
    { name: "O PROJEKCIE", path: "/project" },
  ];

  return (
    <nav className="w-full h-[93px] bg-[#0063af] flex justify-between items-center px-8 lg:px-32 relative z-[1000]">
      {/* Krakow Logo */}
      <img src={KrkLogo} alt="Krakow logo" />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8">
        {menuItems.map((item, index) => (
          <li key={index} className="text-white text-xl font-normal font-lato">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
        <li>
          <img className="mt-[-4px]" src={HomeIcon} alt="Home" />
        </li>
      </ul>

      {/* Hamburger Icon for Small Screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {/* Hamburger Icon (Three Lines) */}
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[93px] left-0 w-full bg-[#0063af] flex flex-col space-y-4 p-4 lg:hidden z-[1100]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-white text-xl font-normal font-lato"
            >
              <Link to={item.path} onClick={toggleMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBarMain;
