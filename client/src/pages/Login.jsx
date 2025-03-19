import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, error, loading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    // login user
    await login(email, password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section (Form) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <h1
          className="md:hidden text-[32px] md:text-[64px] font-extrabold"
          style={{ fontFamily: "'Merriweather Sans'" }}
        >
          <span className="text-custom-purple">Task</span>
          <span className="text-custom-blue">Nexus</span>
        </h1>
        <p
          className="text-[24px] text-center mt-2"
          style={{ fontFamily: "'Nunito'" }}
        >
          Login to your account.
        </p>
        <p
          className="text-[16px] text-center mt-2"
          style={{ fontFamily: "'Nunito'" }}
        >
          Access all that TaskNexus has to offer with a single <br /> account.
          All fields are required.
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-2xs mt-6 text-[14px]"
        >
          <div className="relative mt-4 mb-8">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full py-2 placeholder-gray-400 border border-[#33598B] rounded-xl shadow-sm shadow-[#33598B] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="relative mb-8">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 w-full py-2 placeholder-gray-400 border border-[#33598B] rounded-xl shadow-sm shadow-[#33598B] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-1 text-[20px] font-bold bg-custom-purple text-white rounded-full shadow-md hover:bg-custom-purple"
            style={{ fontFamily: "'Merriweather Sans'" }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
              {error}
            </p>
          )}
        </form>
        <div className="">
          <p
            className="absolute text-[15px] font-semibold bottom-5"
            style={{ fontFamily: "'Montserrat'" }}
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-custom-blue">
              Register
            </Link>
          </p>
        </div>
      </div>
      {/* Right Section (Info) */}
      <div className="hidden lg:flex w-1/2 bg-custom-purple justify-center items-center p-10">
        <div className="text-left px-20">
          <h1
            className="text-[32px] md:text-[64px] font-extrabold"
            style={{ fontFamily: "'Merriweather Sans'" }}
          >
            <span className="text-white">Task</span>
            <span className="text-custom-blue">Nexus</span>
          </h1>
          <p
            className="mt-3 text-[24px] font-semibold"
            style={{ fontFamily: "'Montserrat'" }}
          >
            Seamless planning, smarter business.
          </p>
          <p className="mt-3 text-[13px]" style={{ fontFamily: "'Nunito'" }}>
            Welcome to TaskNexus, your all-in-one solution for streamline
            project planning. Whether you're executing, monitoring or managing
            projects of any size, our platform keeps everything organized and
            efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
