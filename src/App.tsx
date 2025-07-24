import { BG, Navbar } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, PageNotFound, Signup } from "./pages";

const App = () => {
  const location = useLocation();

  const pathname = location.pathname;
  const hideNavBar = ["/login", "/signup"];

  const hideNav = hideNavBar.some((path) => pathname.includes(path));
  return (
    <>
      <BG />
      <div className="w-full min-h-[100dvh] px-2 md:px-28 relative">
        {!hideNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
