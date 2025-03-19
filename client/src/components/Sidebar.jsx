import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import {
  FiMenu,
  FiGrid,
  FiX,
  FiHome,
  FiClipboard,
  FiUsers,
  FiSettings,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-all ${
        isDarkMode ? "bg-gray-700 " : "bg-gray-100 text-gray-500"
      } ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-4 px-3 focus:outline-none ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className="mt-4">
        {[
          { to: "/", icon: <FiHome size={20} />, label: "Home" },
          { to: "/dashboard", icon: <FiGrid size={20} />, label: "Dashboard" },
          {
            to: "/projects",
            icon: <FiClipboard size={20} />,
            label: "Projects",
          },
          { to: "/teams", icon: <FiUsers size={20} />, label: "Teams" },
          {
            to: "/settings",
            icon: <FiSettings size={20} />,
            label: "Settings",
          },
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center px-4 py-3 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
          >
            {icon}
            {isOpen && <span className="ml-3">{label}</span>}
          </Link>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed bottom-0 flex items-center px-4 py-3 text-sm font-semibold cursor-pointer ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
      >
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        {isOpen && (
          <span className="ml-3">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
