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
        `w-full py-1 flex px-4 gap-3 items-center  hover:bg-neutral-800 transition duration-150 ${
          isActive ? "text-[#4f46e5]" : "text-zinc-500"
        } ${className}`
      }
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <p className="text-base font-medium">{text}</p>
    </NavLink>
  );
};

export default SidebarButton;
