import { Brain, Eye, EyeClosed } from "lucide-react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../components";
import { useState } from "react";

const Login = () => {
  const people = [
    {
      id: 1,
      name: "Yasir Naseem",
      designation: "Software Engineer",
      image: "/logintestimonial.jpeg",
    },
    {
      id: 2,
      name: "Arvin",
      designation: "Product Manager",
      image: "logintestimonial2.jpeg",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  type FormValues = {
    username: string;
    password: string;
  };
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh w-full flex">
      {/* Left Div/Form */}
      <main className="h-full w-full md:w-[50%] flex flex-col md:pl-10 md:pr-44 md:py-8 py-6 px-3">
        <div className="h-full w-full">
          {/* Logo Div */}
          <div className="w-full py-5 gap-5 flex flex-col justify-between items-start">
            <Link
              to={"/"}
              className="text-base md:text-xl font-semibold flex items-center justify-center gap-1 text-[#4f46e5]"
            >
              <Brain color="#4f46e5" size={22} />{" "}
              <span className="text-base">Memora</span>
            </Link>

            <h1
              className="text-[24px] font-bold"
              style={{ fontFamily: "Geist Sans, sans-serif " }}
            >
              Login to your account
            </h1>
          </div>

          {/* Form Div */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full py-4 flex flex-col gap-6"
            style={{ fontFamily: "Geist Sans, sans-serif " }}
          >
            <div className="w-full  flex flex-col gap-2">
              <label
                htmlFor="username"
                className="font-medium text-sm tracking-normal"
                style={{ fontFamily: "Geist Sans, sans-serif " }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="py-2 px-2 border rounded-md shadow-md text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                {...register("username")}
              />
            </div>

            <div className="w-full  flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className="font-normal text-sm tracking-normal"
                style={{ fontFamily: "Geist Sans, sans-serif" }}
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="py-2 px-2 border rounded-md shadow-md text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 "
                {...register("password")}
              />
              {showPassword ? (
                <EyeClosed
                  className="absolute right-3 bottom-3 cursor-pointer text-gray-500"
                  size={18}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <Eye
                  className="absolute right-3 bottom-3 cursor-pointer text-gray-500"
                  size={18}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>

            <Link to={"/forgot-password"} className="text-sm text-neutral-600">
              Forgot password?
            </Link>

            <Button text="Login" className="w-full" />

            <p className="text-sm text-neutral-700 text-center">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-black">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </main>

      {/* Right Div */}
      <div className="h-full w-[50%] hidden md:flex flex-col items-center justify-center gap-7 overflow-hidden relative">
        {/* First */}
        <svg
          width="1595"
          height="2"
          viewBox="0 0 1595 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full object-contain pointer-events-none top-20"
        >
          <path
            d="M0 1H1594.5"
            stroke="url(#line-path-gradient-«rab»)"
            strokeDasharray="8 8"
          ></path>
          <defs>
            <linearGradient
              id="line-path-gradient-«rab»"
              x1="0"
              y1="1.5"
              x2="1594.5"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
              <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Second */}
        <svg
          width="1595"
          height="2"
          viewBox="0 0 1595 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full object-contain pointer-events-none top-0 left-5 rotate-90 origin-left"
        >
          <path
            d="M0 1H1594.5"
            stroke="url(#line-path-gradient-«rab»)"
            strokeDasharray="8 8"
          ></path>
          <defs>
            <linearGradient
              id="line-path-gradient-«rab»"
              x1="0"
              y1="1.5"
              x2="1594.5"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
              <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Third */}
        <svg
          width="1595"
          height="2"
          viewBox="0 0 1595 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full object-contain pointer-events-none top-0 right-4 -rotate-90 origin-right"
        >
          <path
            d="M0 1H1594.5"
            stroke="url(#line-path-gradient-«rab»)"
            strokeDasharray="8 8"
          ></path>
          <defs>
            <linearGradient
              id="line-path-gradient-«rab»"
              x1="0"
              y1="1.5"
              x2="1594.5"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
              <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-row items-center justify-center">
          <AnimatedTooltip items={people} />
        </div>
        <h1 className="text-xl font-medium">
          Loved by people all across the whole universe
        </h1>
        <p className="max-w-md mx-auto text-sm md:text-base text-center">
          Memora blends productivity and AI to help you search your content
          effortlessly—no keywords, just natural conversations.
        </p>

        <svg
          width="1595"
          height="2"
          viewBox="0 0 1595 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full object-contain pointer-events-none bottom-20"
        >
          <path
            d="M0 1H1594.5"
            stroke="url(#line-path-gradient-«rac»)"
            strokeDasharray="8 8"
          ></path>
          <defs>
            <linearGradient
              id="line-path-gradient-«rac»"
              x1="0"
              y1="1.5"
              x2="1594.5"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
              <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Login;
