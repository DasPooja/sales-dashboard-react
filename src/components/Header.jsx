
import { FaSearch, FaRegBell, FaChevronDown, FaGlobe, FaBars } from "react-icons/fa";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-xs gap-3">

      {/* LEFT: Hamburger + Title */}
      <div className="flex items-center gap-3">
        {/* 👉 Hamburger (only mobile) */}
        <button
          className="lg:hidden text-gray-600 text-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>
      </div>

      {/* SEARCH (hide on very small screens) */}
      <div className="hidden sm:block w-full max-w-xs md:max-w-sm relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 text-sm" />

        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-xl outline-none text-sm"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 md:gap-6">

        {/* Language (hide on small mobile) */}
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <FaGlobe className="text-indigo-500" />
          <span>Eng (US)</span>
          <FaChevronDown className="text-xs" />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer bg-orange-50 p-2 rounded-md">
          <FaRegBell className="text-orange-400 text-lg" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />

          {/* Hide text on very small screens */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium">Musfiq</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>

          <FaChevronDown className="text-xs text-gray-500 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;