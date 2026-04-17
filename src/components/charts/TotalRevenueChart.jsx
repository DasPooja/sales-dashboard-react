import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", "Online Sales": 14000, "Offline Sales": 12000 },
  { name: "Tues", "Online Sales": 15000, "Offline Sales": 11000 },
  { name: "Wed", "Online Sales": 20000, "Offline Sales": 23000 },
  { name: "Thurs", "Online Sales": 18000, "Offline Sales": 12000 },
  { name: "Fri", "Online Sales": 16000, "Offline Sales": 10000 },
  { name: "Sat", "Online Sales": 22000, "Offline Sales": 14000 },
  { name: "Sun", "Online Sales": 19000, "Offline Sales": 11000 },
];

const TotalRevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 0, left: -30, bottom: 10 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 10, dy: 10 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 10}}
          ticks={[0, 5000, 10000, 15000, 20000, 25000]}
          domain={[0, 25000]}
        //   label={{ value: "25k", angle: -90, position: "insideLeft", offset: 10 }}
        />
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.05)" }}
          contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }}
        />
        <Legend
          verticalAlign="bottom"
          height={25}
          iconType="circle"
          iconSize={10}
          formatter={(value) => (
            <span style={{ fontSize: 10, fontWeight: 500, color: "#4B5563" }}>{value}</span>
          )}
          wrapperStyle={{ paddingTop: 10,  marginLeft: 20 }}
        />
        <Bar dataKey="Online Sales" fill="#3B82F6" />
        <Bar dataKey="Offline Sales" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalRevenueChart;
