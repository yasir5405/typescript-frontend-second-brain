import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import { login, logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Brain, ChevronsUpDown, Share2 } from "lucide-react";
import SidebarButton from "../components/ui/SidebarButton";
import { SidebarButtons, type SidebarButtonInterface } from "../data";
import { AddContentModal, Button } from "@/components";
import { motion } from "framer-motion";

const Dashboard = () => {
  const userData = useSelector((state: any) => state.auth.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await api.get("/me");
        // console.log(res.data.user);
        dispatch(login(res.data.user));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

  const location = useLocation();
  const path =
    location.pathname === "/dashboard"
      ? location.pathname.split("/")[1]
      : location.pathname.split("/")[2];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-svh min-h-svh flex relative">
      {/* Dashboard Sidebar */}
      <div className="h-full w-[18%] hidden relative md:flex flex-col px-6 py-5 bg-neutral-900">
        {/* Logo */}
        <Link
          to={"/dashboard"}
          className="text-base md:text-3xl font-semibold flex items-center gap-3 text-white"
        >
          <Brain color="#4f46e5" className="w-8 h-8" /> Memora
        </Link>

        {/* Sidebar buttons */}
        <div className="h-full w-full py-10 flex flex-col gap-2">
          {SidebarButtons.map(
            ({ icon, id, text, url }: SidebarButtonInterface) => (
              <SidebarButton icon={icon} text={text} key={id} url={url} />
            )
          )}
        </div>

        {/* Profile Box */}
        <div className="w-full py-3 absolute flex items-center justify-between bottom-0 left-0 border border-neutral-800 px-2 rounded-md">
          <div className="flex h-full items-center gap-2">
            <img
              className="h-10 w-10 rounded-md"
              src={userData?.profileImage || "default-user.png"}
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-muted">
                {userData?.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {userData?.username}
              </p>
            </div>
          </div>
          <Button
            variant="destructive"
            startIcon={<ChevronsUpDown size={19} />}
            onClick={logoutHandler}
            className="p-0 bg-transparent text-neutral-500 rounded-full border-none"
            size="sm"
          />
        </div>
      </div>

      {/* Background Overlay for mobile sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 md:hidden block h-full w-full bg-neutral-800/60 z-30"
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div>

      {/* Mobile sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute md:hidden top-0 left-0 h-full w-60 bg-neutral-700 shadow-lg z-40 flex flex-col px-6 py-5"
      >
        {/* Logo */}
        <Link
          to={"/dashboard"}
          className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Brain color="#4f46e5" className="w-8 h-8" /> Memora
        </Link>

        {/* Sidebar buttons */}
        <div className="h-full w-full py-10 flex flex-col gap-2">
          {SidebarButtons.map(
            ({ icon, id, text, url }: SidebarButtonInterface) => (
              <SidebarButton
                className="px-0 hover:bg-transparent"
                icon={icon}
                text={text}
                key={id}
                url={url}
                onClick={() => setIsOpen(!isOpen)}
              />
            )
          )}
        </div>

        {/* Profile Box */}
        <div className="w-full py-3 absolute flex items-center justify-between bottom-0 left-0 border border-neutral-600 px-2 rounded-md">
          <div className="flex h-full items-center gap-2">
            <img
              className="h-8 w-8 rounded-md"
              src={userData?.profileImage || "default-user.png"}
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-muted">
                {userData?.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {userData?.username}
              </p>
            </div>
          </div>
          <Button
            variant="destructive"
            startIcon={<ChevronsUpDown size={19} />}
            onClick={logoutHandler}
            className="p-0 bg-transparent text-neutral-500 rounded-full border-none"
            size="sm"
          />
        </div>
      </motion.div>

      {/* Outlet */}
      <div className="h-full w-full overflow-x-hidden bg-neutral-800 p-4 md:p-10 text-white overflow-hidden">
        {/* Nav containing upload button */}
        <nav className="py-2 w-full flex items-center justify-between">
          <h1 className="md:text-2xl font-bold">
            {path === "dashboard"
              ? "All notes"
              : path.substring(0, 1).toUpperCase() + path.substring(1)}
          </h1>

          {/* Buttons */}
          <div className="md:flex gap-3 hidden">
            <Button
              className="rounded-md"
              variant="secondary"
              text="Share Brain"
              startIcon={<Share2 />}
            />
            <AddContentModal />
          </div>

          {/* <MenuIcon className="md:hidden" /> */}
          <motion.svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer md:hidden"
          >
            {/* Top Line */}
            <motion.path
              d="M4 6h16"
              animate={isOpen ? { d: "M6 6l12 12" } : { d: "M4 6h16" }}
              transition={{ duration: 0.3 }}
            />

            {/* Middle Line */}
            <motion.path
              d="M4 12h16"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Bottom Line */}
            <motion.path
              d="M4 18h16"
              animate={isOpen ? { d: "M18 6l-12 12" } : { d: "M4 18h16" }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
