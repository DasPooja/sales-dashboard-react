import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", lastMonth: 65, thisMonth: 78 },
  { name: "Feb", lastMonth: 72, thisMonth: 82 },
  { name: "Mar", lastMonth: 68, thisMonth: 80 },
  { name: "Apr", lastMonth: 75, thisMonth: 85 },
  { name: "May", lastMonth: 78, thisMonth: 88 },
  { name: "Jun", lastMonth: 82, thisMonth: 90 },
  { name: "Jul", lastMonth: 80, thisMonth: 92 },
];

const renderLegend = () => (
  <div className="w-full flex items-center justify-center gap-3 text-slate-600">
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-sm font-light text-slate-500">
        <span className="w-2 h-2 rounded-full bg-[#3B82F6] relative">
          <span className="absolute top-1/2 -left-1 w-4 h-px bg-[#3B82F6] transform -translate-y-1/2" />
        </span>
        <span className="text-slate-500">Last Month</span>
      </div>
      <div className="text-xs font-bold">$3,004</div>
    </div>
    <div className="h-5 w-px mb-2 bg-slate-400" />
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-sm font-light text-slate-500">
        <span className="w-2 h-2 rounded-full bg-[#10B981] relative">
          <span className="absolute top-1/2 -left-1 w-4 h-px bg-[#10B981] transform -translate-y-1/2" />
        </span>
        <span>This Month</span>
      </div>
      <div className="text-xs font-bold">$4,504</div>
    </div>
  </div>
);

const CustomerSatisfactionChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
        <defs>
          <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={false}
        //   tick={{ fill: "#6B7280", fontSize: 11 }}
          minTickGap={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
        //   tick={{ fill: "#6B7280", fontSize: 11 }}
          domain={[0, 100]}
          width={30}
          tickMargin={8}
        />
        <Tooltip
          cursor={{ stroke: "#CBD5E1", strokeWidth: 1 }}
          contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }}
        />
        <Legend content={renderLegend} verticalAlign="bottom" align="center" wrapperStyle={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 25 }} />
        <Area
          type="monotone"
          dataKey="lastMonth"
          name="Last Month"
          stroke="#3B82F6"
          fillOpacity={1}
          fill="url(#colorLastMonth)"
          strokeWidth={2}
          dot={{ stroke: "#3B82F6", strokeWidth: 2, r: 3, fill: "#3B82F6" }}
          activeDot={{ r: 6 }}
        />
        <Area
          type="monotone"
          dataKey="thisMonth"
          name="This Month"
          stroke="#10B981"
          fillOpacity={1}
          fill="url(#colorThisMonth)"
          strokeWidth={2}
          dot={{ stroke: "#10B981", strokeWidth: 2, r: 3, fill: "#10B981" }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomerSatisfactionChart;
