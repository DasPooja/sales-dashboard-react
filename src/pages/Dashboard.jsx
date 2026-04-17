import { useState } from "react";
import Sidebar from "../components/Sidebar"
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import VisitorChart from "../components/charts/VisitorChart";
import TotalRevenueChart from "../components/charts/TotalRevenueChart";
import CustomerSatisfactionChart from "../components/charts/CustomerSatisfactionChart";
import TargetVsRealityChart from "../components/charts/TargetVsRealityChart";
import UserTable from "../components/UserTable";
import { PiExportBold } from "react-icons/pi";
import { HiChartSquareBar } from "react-icons/hi";
import { FaFileLines } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import SalesMap from "../components/charts/WorldMap";
import VolumeServiceChart from "../components/charts/VolumeServiceChart";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-green-100 p-2">
      
      {/*  Stack sidebar on mobile */}
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
        
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <div className="flex-1 bg-gray-50">
          <Header setIsSidebarOpen={setIsSidebarOpen}/>

          <div className="p-4 md:p-6 space-y-6">

            {/* 🔹 SECTION 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              
              {/* Today's Sales */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-bold">Today's Sales</h3>
                    <p className="text-xs font-medium text-gray-400">
                      Sales Summary
                    </p>
                  </div>

                  <button className="border border-gray-300 px-3 py-1 flex items-center gap-1 rounded-md text-xs font-medium w-fit">
                    <PiExportBold />
                    Export
                  </button>
                </div>

                {/* Responsive stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard title="Total Sales" value="$1K" color="bg-red-100" circleColor="bg-red-400" icon={<HiChartSquareBar color="white" />} summaryText="+8% from yesterday" />
                  <StatCard title="Total Orders" value="300" color="bg-orange-100" circleColor="bg-orange-400" icon={<FaFileLines color="white" />} summaryText="+5% from yesterday" />
                  <StatCard title="Products Sold" value="5" color="bg-green-100" circleColor="bg-green-500" icon={<IoIosPricetag color="white" />} summaryText="+2% from yesterday" />
                  <StatCard title="New Customers" value="8" color="bg-purple-100" circleColor="bg-purple-500" icon={<FaUserPlus color="white" />} summaryText="0.5% from yesterday" />
                </div>
              </div>

              {/* Visitor Insights */}
              <div className="lg:col-span-2">
                <ChartCard title="Visitor Insights">
                  <VisitorChart />
                </ChartCard>
              </div>
            </div>

            {/* 🔹 SECTION 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              
              <div className="md:col-span-2 lg:col-span-3">
                <ChartCard title="Total Revenue">
                  <TotalRevenueChart />
                </ChartCard>
              </div>

              <div className="md:col-span-1 lg:col-span-2">
                <ChartCard title="Customer Satisfaction">
                  <CustomerSatisfactionChart />
                </ChartCard>
              </div>

              <div className="md:col-span-1 lg:col-span-2">
                <ChartCard title="Target vs Reality">
                  <TargetVsRealityChart />
                </ChartCard>
              </div>
            </div>

            {/* 🔹 SECTION 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              
              <div className="md:col-span-2 lg:col-span-3">
                <UserTable />
              </div>

              <div className="md:col-span-1 lg:col-span-2">
                <ChartCard title="Sales Mapping by Country">
                  <SalesMap />
                </ChartCard>
              </div>

              <div className="md:col-span-1 lg:col-span-2">
                <ChartCard title="Volume vs Service Level">
                  <VolumeServiceChart />
                </ChartCard>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;