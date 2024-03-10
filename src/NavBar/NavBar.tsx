import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [mode, setMode] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const handleMode = () => setMode(!mode);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Projects" },
    { id: 2, text: "Experience" },
    { id: 3, text: "Education" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Resume" },
  ];

  return (
    <div className="absolute mx-auto flex h-12 w-full items-center justify-center border-b border-b-chestnut bg-black px-16 text-white">
      <div className="flex w-[640px] items-center justify-end text-chestnut-700">
        <Link
          to={"/"}
          className="mr-24 flex h-12 w-[128px] items-center justify-center transition hover:bg-gray-100/25"
        >
          <h1 className="font-bold"> {">"} Fabian Mena</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden w-[640px] md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="h-12 w-[128px] transition hover:bg-gray-100/25"
          >
            <Link
              to={`/${item.text}`}
              className="flex h-12 w-[128px] items-center justify-center"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-[640px] text-left ">
        {mode ? (
          <BsSun
            onClick={handleMode}
            className=" ml-24 cursor-pointer"
            size={20}
          />
        ) : (
          <BsMoon
            onClick={handleMode}
            className=" ml-24 cursor-pointer"
            size={20}
          />
        )}
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
