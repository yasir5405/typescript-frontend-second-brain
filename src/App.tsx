import { BG, Navbar } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  DashboardHome,
  Home,
  Links,
  Login,
  Notes,
  PageNotFound,
  Signup,
  Tags,
  Tweets,
  Videos,
} from "./pages";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const location = useLocation();

  const pathname = location.pathname;
  const hideNavBar = ["/login", "/signup", "/dashboard"];

  const hideNav = hideNavBar.some((path) => pathname.includes(path));
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <BG />}
      <div
        className={`w-full min-h-[100dvh]  relative ${
          isDashboard ? "" : "px-2 md:px-28"
        }`}
        style={{ fontFamily: "Geist Sans, sans-serif " }}
      >
        {!hideNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="videos" element={<Videos />} />
            <Route path="notes" element={<Notes />} />
            <Route path="links" element={<Links />} />
            <Route path="tags" element={<Tags />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
