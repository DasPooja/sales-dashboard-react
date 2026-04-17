import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaBullseye } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

const data = [
  { name: "Jan", Reality: 16000, Target: 18000 },
  { name: "Feb", Reality: 18500, Target: 20000 },
  { name: "Mar", Reality: 21000, Target: 22000 },
  { name: "Apr", Reality: 24000, Target: 25000 },
  { name: "May", Reality: 24500, Target: 26000 },
  { name: "Jun", Reality: 27000, Target: 28000 },
  { name: "Jul", Reality: 28500, Target: 30000 },
];

const TargetVsRealityChart = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 14, right: 1, left: -60, bottom: 0 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 10 }}
            />
            <YAxis axisLine={false} tickLine={false} tick={false} />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }}
            />
            <Bar dataKey="Target" fill="#FBBF24" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Reality" fill="#10B981" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 w-full text-slate-600 text-sm">
        <div className="space-y-2">
          <div className="flex items-start justify-start gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                <SlHandbag size={12} />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-800">Reality Sales</div>
                <div className="text-[10px] text-slate-500">Global</div>
              </div>
            </div>
            <div className="text-xs font-bold text-emerald-600">8,823</div>
          </div>
          <div className="flex items-start justify-start gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-100 text-yellow-600">
                <FaBullseye size={12} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Target Sales</div>
                <div className="text-[10px] text-slate-500">Commercial</div>
              </div>
            </div>
            <div className="text-xs font-semibold text-yellow-500">12,122</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetVsRealityChart;
