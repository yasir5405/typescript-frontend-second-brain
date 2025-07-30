import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarButtonProps {
  icon: LucideIcon;
  text: string;
  url: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon: Icon,
  text,
  url,
}: SidebarButtonProps) => {
  return (
    <NavLink
      to={`/dashboard${url}`}
      className={({ isActive }) =>
        `w-full py-3 flex px-4 gap-3 items-center text-zinc-500 hover:bg-white ${
          isActive ? "text-blue-500" : ""
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <p className="text-base font-medium">{text}</p>
    </NavLink>
  );
};

export default SidebarButton;
