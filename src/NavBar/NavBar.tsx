import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Projects", icon: <FaCode size="1.5em" className="flex" /> },
    {
      id: 2,
      text: "Experience",
      icon: <MdBusinessCenter size="1.5em" className="flex" />,
    },
    {
      id: 3,
      text: "Education",
      icon: <IoMdSchool size="1.5em" className="flex" />,
    },
    { id: 4, text: "Skills", icon: <FaGear size="1.5em" className="flex" /> },
    {
      id: 5,
      text: "Resume",
      icon: <GrDocumentText size="1.5em" className="flex" />,
    },
  ];

  return (
    <div className="absolute mx-auto flex h-12 w-full items-center justify-center border-b border-b-chestnut bg-black text-white lg:px-16">
      <div className=" flex w-1/3 items-center text-chestnut-700 lg:w-[640px] lg:justify-end">
        <Link
          to={"/"}
          className="flex transition lg:mr-24 lg:h-12 lg:w-[128px] lg:items-center lg:justify-center lg:hover:bg-gray-100/25"
        >
          <h1 className="font-bold"> {"~"} Fabian Mena</h1>
        </Link>
      </div>

      <ul className=" flex w-48 flex-row lg:w-[640px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="m-auto h-12 transition lg:w-[128px] lg:hover:bg-gray-100/25"
          >
            <Link
              to={`/${item.text}`}
              className="flex h-12 items-center justify-center lg:w-[128px]"
            >
              {item.icon}
              <span className="hidden lg:flex lg:px-2">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:w-[640px]"></div>
    </div>
  );
};

export default Navbar;
