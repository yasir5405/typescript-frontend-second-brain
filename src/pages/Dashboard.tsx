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
      <div className="h-full w-[17%] hidden relative md:flex flex-col px-0 bg-[#161514] border-r-[1px] border-neutral-800">
        {/* Logo */}
        <Link
          to={"/dashboard"}
          className="text-base md:text-lg font-medium flex items-center gap-2  text-white border-b-[1px] border-neutral-800 px-6 py-4"
        >
          <Brain color="#0ea5e9" className="w-6 h-6" /> MemoraAI
        </Link>

        <div className="h-full w-full flex flex-col justify-between">
          {/* Sidebar buttons */}
          <div className="h-full w-full py-2 px-2 flex flex-col gap-2">
            {SidebarButtons.map(
              ({ icon, id, text, url }: SidebarButtonInterface) => (
                <SidebarButton icon={icon} text={text} key={id} url={url} />
              )
            )}
          </div>

          {/* Profile Box */}
          <div className="w-full py-3 flex items-center justify-between border border-neutral-800 px-2 rounded-md">
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
        </div>
      </div>

      {/* Background Overlay for mobile sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 md:hidden block h-full w-full bg-transparent z-30"
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div>

      {/* Mobile sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute md:hidden top-0 left-0 h-full w-[260px] bg-[#161514] shadow-lg z-40 flex flex-col"
      >
        {/* Logo */}
        <Link
          to={"/dashboard"}
          className="text-lg md:text-lg font-medium flex items-center gap-2  text-white border-b-[1px] border-neutral-800 px-8 py-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Brain color="#0ea5e9" className="w-6 h-6" /> MemoraAI
        </Link>

        <div className="h-full w-full flex flex-col justify-between">
          {/* Sidebar buttons */}
          <div className="h-full w-full py-2 px-4 flex flex-col gap-2">
            {SidebarButtons.map(
              ({ icon, id, text, url }: SidebarButtonInterface) => (
                <SidebarButton
                  onClick={() => setIsOpen(!isOpen)}
                  icon={icon}
                  text={text}
                  key={id}
                  url={url}
                />
              )
            )}
          </div>

          {/* Profile Box */}
          <div className="w-full py-3 flex items-center justify-between border border-neutral-800 px-2 rounded-md">
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
      </motion.div>

      {/* Outlet */}
      <div className="h-full w-full overflow-x-hidden bg-neutral-950 p-0 md:py-6 md:px-5 text-white overflow-hidden">
        {/* Nav containing upload button */}
        <nav className="py-2 bg-neutral-900 md:bg-transparent w-full flex items-center justify-between px-4 md:px-0">
          <h1 className="md:text-2xl text-lg font-bold">
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

          <div className="p-2 block md:hidden border border-neutral-800 rounded-md bg-neutral-950">
            <motion.svg
              onClick={() => setIsOpen(!isOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </div>
        </nav>

        {path === "dashboard" ? (
          <div className="flex gap-1  w-full justify-between px-4 py-2 md:hidden">
            <Button
              className="rounded-md z-10"
              variant="secondary"
              text="Share Brain"
              size="sm"
              startIcon={<Share2 />}
            />
            <AddContentModal />
          </div>
        ) : null}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
