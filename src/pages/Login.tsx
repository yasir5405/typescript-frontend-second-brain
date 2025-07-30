import { Brain, Eye, EyeClosed } from "lucide-react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../components";
import { useState } from "react";
import api from "../api/api";
import { people } from "../data";

const Login = () => {
  type FormValues = {
    username: string;
    password: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await api.post("/login", data);
      // console.log(res.data);
      if (res.data.status === true) {
        localStorage.setItem("token", res.data.token);
        // console.log(res.data);
        navigate("/dashboard");
      }
    } catch (error: any) {
      // console.log(error.response.data);
      if (error.response && error.response.data) {
        if (error.response.data.status === false) {
          setError(error.response.data.message);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-dvh md:h-dvh w-full flex"
      style={{ fontFamily: "Geist Sans, sans-serif " }}
    >
      {/* Left Div/Form */}
      <main className="h-full w-full lg:w-[50%] flex flex-col md:pl-10 lg:pr-44 md:py-8 py-6 px-3">
        <div className="h-full w-full flex flex-col gap-1 md:gap-3">
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
                required
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
                required
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

            {error && (
              <p className="text-sm md:text-base text-red-600">{error}</p>
            )}

            <Link to={"/forgot-password"} className="text-sm text-neutral-500">
              Forgot password?
            </Link>

            <Button loading={isLoading} text="Login" className="w-full" />

            <p className="text-sm text-neutral-600 text-center">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-black">
                Sign up
              </Link>
            </p>
          </form>

          {/* BorderDiv */}
          <div className="w-full flex items-center gap-4 py-2">
            <div className="h-[0.5px] flex-1 bg-neutral-400"></div>
            <p className="text-neutral-400 text-sm">Or continue with</p>
            <div className="h-[0.5px] flex-1 w-full bg-neutral-400"></div>
          </div>

          {/* Login with google button */}
          <Button
            text="Google"
            variant="secondary"
            className="w-full border-blue-500"
            startIcon={
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
            }
          />

          <p className="text-center text-xs mt-5 md:mt-0 mb-5 md:mb-0 md:text-sm text-neutral-700">
            By clicking on sign in, you agree to our{" "}
            <Link className="text-neutral-500" to={"/login"}>
              Terms of Service
            </Link>{" "}
            and Privacy Policy
          </p>
        </div>
      </main>

      {/* Right Div */}
      <div className="h-full w-[50%] hidden lg:flex flex-col items-center justify-center gap-7 overflow-hidden relative">
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
