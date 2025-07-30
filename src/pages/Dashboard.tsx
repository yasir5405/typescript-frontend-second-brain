import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../api/api";
import { login, logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Brain, LogOut, User } from "lucide-react";
import SidebarButton from "../components/ui/SidebarButton";
import { SidebarButtons, type SidebarButtonInterface } from "../data";
import { Button } from "@/components";

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
        // console.log(res.data);
        dispatch(login(res.data.user));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

  return (
    <div className="w-full h-svh min-h-svh flex">
      {/* Dashboard Sidebar */}
      <div className="h-full w-1/4 relative border-r flex flex-col px-6 py-4 bg-white/50">
        {/* Logo */}
        <Link
          to={"/dashboard"}
          className="text-base md:text-3xl font-semibold flex items-center gap-3 text-black"
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

        <div className="w-full py-3 absolute flex items-center justify-between bottom-0 left-0 border px-2 rounded-md">
          <div className="flex h-full items-center gap-2">
            <User
              className="rounded-full border border-black p-[2px]"
              size={35}
            />
            <div className="flex flex-col">
              <p className="text-base font-semibold">{userData?.name}</p>
              <p className="text-base">{userData?.username}</p>
            </div>
          </div>
          <Button
            variant="destructive"
            startIcon={<LogOut />}
            onClick={logoutHandler}
            size="sm"
          />
        </div>
      </div>

      {/* Outlet */}
      <div className="h-full w-3/4 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
