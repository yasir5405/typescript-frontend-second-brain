import { Brain, MenuIcon } from "lucide-react";
import type React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

interface NavbarProps {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

const navbarItems: NavbarProps[] = [
  { name: "Pricing", link: "/pricing" },
  { name: "Notes", link: "/notes" },
  { name: "Contact", link: "/contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // console.log(isScrolled);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`sticky w-full top-3 md:w-full h-[50px] md:h-[70px] flex items-center justify-between rounded-full px-3 mt-3 z-50 transition-all duration-200 ease-linear border  ${
        isScrolled
          ? "bg-gradient-to-b from-slate-50 to-indigo-100 border-gray-300"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-center gap-8">
        <Link
          to={"/"}
          className="text-base md:text-xl font-semibold flex items-center justify-center gap-1 text-[#4f46e5]"
        >
          <Brain color="#4f46e5" /> Memora
        </Link>

        {navbarItems.map(({ name, link, icon }, idx) => (
          <NavLink
            className={({ isActive }) =>
              `hidden md:flex items-center justify-center gap-1 text-sm font-medium  p-2 rounded-lg transition-all duration-100 ease-linear ${
                isActive ? "text-indigo-600" : "text-zinc-600"
              } ${isScrolled ? "hover:bg-white" : "hover:bg-gray-200"}`
            }
            key={idx}
            to={link}
          >
            {icon} {name}
          </NavLink>
        ))}
      </div>

      {/* MenuButton for mobile navBar */}
      <MenuIcon className="block md:hidden" />

      {/* Login */}
      <div className="hidden md:flex items-center justify-center gap-7">
        <Link to={"/login"}>
          <Button
            text="Login"
            className=" border-blue-500 text-sm font-semibold border-2"
            variant="secondary"
          />
        </Link>
        <Link to={"/signup"}>
          <Button
            text="Sign up"
            className=" text-white hover:bg-indigo-600 duration-200 ease-linear"
            // endIcon={<ArrowRightIcon size={20} />}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
