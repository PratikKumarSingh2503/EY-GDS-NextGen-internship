import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="px-10 h-15 flex items-center justify-between border-b border-sky-900">
      <h1
        className="text-[32px] font-extrabold"
        style={{ fontFamily: "'Merriweather Sans'" }}
      >
        <span className="text-custom-purple">Task</span>
        <span className="text-custom-blue">Nexus</span>
      </h1>

      <nav className="flex gap-5">
        {!user && (
          <div className="flex gap-5">
            <Link to="/login" className="hover:text-sky-400 duration-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-sky-400 duration-300">
              Signup
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5">
            <span>{user.email}</span>

            <button
              onClick={handleLogout}
              type="submit"
              className="bg-rose-500 text-white py-1 px-5 rounded-lg hover:bg-sky-50 hover:text-slate-900 duration-300 capitalize"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
