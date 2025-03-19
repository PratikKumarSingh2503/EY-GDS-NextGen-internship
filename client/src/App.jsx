import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative font-sans">
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-400 active:scale-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;