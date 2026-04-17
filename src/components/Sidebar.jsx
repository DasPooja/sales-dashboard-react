import {
  FaChartPie,
  FaChartBar,
  FaShoppingCart,
  FaBox,
  FaFileAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-56 bg-white p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-indigo-500 text-white p-2 rounded-lg"><FaChartPie /></div>
        <h1 className="text-lg font-semibold">Dabang</h1>
      </div>

      <nav className="flex flex-col gap-3 text-gray-500">
        <button className="flex items-center gap-3 bg-indigo-500 text-white px-4 py-2.5 rounded-xl">
           <FaChartPie />
          Dashboard
        </button>
        <button className="flex items-center gap-3  px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaChartBar />
           Leaderboard
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 rounded-xl">    
          <FaShoppingCart />
          Order
        </button>
        <button className="flex items-center gap-3  px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaBox />
          Products
        </button>
        <button className="flex items-center gap-3  px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaFileAlt />
          Sales Report
        </button>
        <button className="flex items-center gap-3  px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaEnvelope />
          Messages
        </button>
        <button className="flex items-center gap-3  px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaCog />
          Settings
        </button>
          {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 rounded-xl">
          <FaSignOutAlt />
          Logout
        </button>
      </nav>

      {/* Bottom Card */}
       {/* Bottom Card */}
      <div className="mt-auto bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-5 rounded-2xl text-center relative overflow-hidden">

        {/* Icon */}
        <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-xl mx-auto mb-3">
          <FaChartPie />
        </div>

        <p className="font-semibold">Dabang Pro</p>
        <p className="text-xs mt-1 opacity-80">
          Get access to all features on tetumbas
        </p>

        <button className="mt-3 bg-white text-indigo-500 px-4 py-1.5 rounded-lg text-sm font-medium">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;