import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarButtonProps {
  icon: LucideIcon;
  text: string;
  url: string;
  className?: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon: Icon,
  text,
  url,
  className,
  onClick,
}: SidebarButtonProps) => {
  return (
    <NavLink
      to={`/dashboard${url}`}
      className={({ isActive }) =>
        `w-full py-2 flex px-4 rounded-md gap-2 items-center hover:text-sky-500 transition duration-100 ease-linear ${isActive ? "text-sky-500 bg-neutral-800" : "text-[#a3a3a9]"
        } ${className}`
      }
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      <p className="text-sm tracking-wide font-medium">{text}</p>
    </NavLink>
  );
};

export default SidebarButton;
