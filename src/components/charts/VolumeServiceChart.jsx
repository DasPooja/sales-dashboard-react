import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", volume: 200, service: 120 },
  { name: "Feb", volume: 300, service: 150 },
  { name: "Mar", volume: 250, service: 90 },
  { name: "Apr", volume: 220, service: 110 },
  { name: "May", volume: 180, service: 100 },
  { name: "Jun", volume: 200, service: 160 },
];

const VolumeServiceChart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">

      {/* Chart */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />

            {/* Bottom part (green) */}
            <Bar
              dataKey="service"
              stackId="a"
              fill="#10B981"
              radius={[0, 0, 4, 4]}
              barSize={20}
            />

            {/* Top part (blue) */}
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Divider */}
      <div className="border-t border-t-gray-300 my-2 w-full"></div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500">

        {/* Volume */}
        <div className="flex items-center gap-2">
            {/* <span className="w-2 h-2 rounded-full bg-blue-500"></span> */}
            
            <div className="flex flex-col">
            <span className="flex items-center justify-center gap-2"> <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Volume</span>
            <span className="font-semibold text-black ml-4">1,135</span>
            </div>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* Services */}
        <div className="flex items-center gap-2">
            {/* <span className="w-2 h-2 rounded-full bg-green-500"></span> */}
            
            <div className="flex flex-col">
            <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Services
            </span>
            <span className="font-semibold text-black ml-4">635</span>
            </div>
        </div>

        </div>
    </div>
  );
};

export default VolumeServiceChart;