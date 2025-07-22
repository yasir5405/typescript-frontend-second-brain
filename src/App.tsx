import { BG, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "./pages";

const App = () => {
  return (
    <>
      <BG />
      <Navbar />
      <div className="w-full min-h-[100dvh] px-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
