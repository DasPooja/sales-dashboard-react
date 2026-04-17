import { FaSearch , FaRegBell, FaChevronDown, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-xs">
      
      {/* Title */}
      <h2 className="text-xl font-semibold">Dashboard</h2>

      {/* Search */}
      <div className="w-1/3 relative">
       {/* Icon */}
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 text-sm" />

        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-xl outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Language */}
        <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <FaGlobe className="text-indigo-500"/><span> Eng (US)</span>
          <FaChevronDown className="text-xs" />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer border-none bg-orange-50 p-2 rounded-md">
          <FaRegBell className="text-orange-400 text-lg" />
          
          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">Musfiq</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>

          <FaChevronDown className="text-xs text-gray-500" />
        </div>

      </div>
    </div>
  );
};

export default Header;