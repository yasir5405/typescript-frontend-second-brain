import {
  ArrowRightIcon,
  BookOpenCheck,
  CalendarDays,
  Contact,
  Home,
  Info,
  NotebookText,
  Settings,
} from "lucide-react";
import type React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./ui/Button";
// import Button from "./Button";

interface NavbarProps {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

const navbarItems: NavbarProps[] = [
  { name: "Home", link: "/", icon: <Home size={17} /> },
  { name: "About", link: "/about", icon: <Info size={17} /> },
  { name: "Notes", link: "/notes", icon: <NotebookText size={17} /> },
  { name: "Tasks", link: "/tasks", icon: <BookOpenCheck size={17} /> },
  { name: "Calendar", link: "/calendar", icon: <CalendarDays size={17} /> },
  { name: "Settings", link: "/settings", icon: <Settings size={17} /> },
  { name: "Contact", link: "/contact", icon: <Contact size={17} /> },
];

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[50px] flex items-center justify-between">
      <div className="flex items-center justify-center gap-8">
        {navbarItems.map(({ name, link, icon }, idx) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center justify-center gap-1 text-sm font-medium ${
                isActive ? "text-indigo-600" : ""
              }`
            }
            key={idx}
            to={link}
          >
            {icon} {name}
          </NavLink>
        ))}
      </div>

      {/* Login */}
      <div className="flex items-center justify-center gap-7">
        <Link to={"/login"}>
          <Button
            text="Login"
            className=" border-blue-500 text-sm font-semibold border-2"
            variant="secondary"
          />
        </Link>
        <Link to={"/signup"}>
          <Button
            text="Get started"
            className=" text-white hover:bg-indigo-600 duration-200 ease-linear"
            endIcon={<ArrowRightIcon size={20} />}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
