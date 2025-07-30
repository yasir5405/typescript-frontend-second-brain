import { ArrowRight } from "lucide-react";
import { Button } from "../components";
import { BackgroundLines } from "../components/ui/background-lines";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[60vh] md:h-[79dvh] w-full flex items-center justify-center relative">
        {/* Hero Section */}
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-white md:h-full">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-indigo-900 to-indigo-700 dark:from-indigo-600 dark:to-gray-200/20 md:dark:to-gray-200 text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mb-4 md:mb-0">
            Your AI-Powered Second Brain, <br /> for Everything You Save.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg  text-center">
            Memora blends productivity and AI to help you search, and understand
            your content effortlessly—no keywords, just natural conversations.
          </p>

          <div className="w-full flex items-center justify-center mt-8 gap-4">
            <Button
              text="Get started"
              className="hover:bg-indigo-600 duration-200 ease-linear"
              onClick={() => navigate("/login")}
            />
            <Button
              text="Contact us"
              variant="secondary"
              className="border-2 border-indigo-500"
              endIcon={<ArrowRight size={16} />}
            />
          </div>
        </BackgroundLines>
      </div>

      {/* Hero image */}
      <div className="w-full rounded-xl overflow-hidden p-5 border-2 bg-gray-200 relative">
        <img className="rounded-2xl" src="/header.webp" alt="" />
      </div>
    </>
  );
};

export default Home;
