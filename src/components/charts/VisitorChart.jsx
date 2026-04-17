import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", loyal: 220, newCustomers: 180, unique: 200 },
  { name: "Feb", loyal: 260, newCustomers: 220, unique: 230 },
  { name: "Mar", loyal: 280, newCustomers: 250, unique: 260 },
  { name: "Apr", loyal: 290, newCustomers: 260, unique: 280 },
  { name: "May", loyal: 260, newCustomers: 335, unique: 290 },
  { name: "Jun", loyal: 220, newCustomers: 370, unique: 275 },
  { name: "Jul", loyal: 250, newCustomers: 300, unique: 210 },
  { name: "Aug", loyal: 280, newCustomers: 230, unique: 150 },
  { name: "Sep", loyal: 250, newCustomers: 180, unique: 210 },
  { name: "Oct", loyal: 160, newCustomers: 140, unique: 245 },
  { name: "Nov", loyal: 240, newCustomers: 180, unique: 250 },
  { name: "Dec", loyal: 300, newCustomers: 200, unique: 160 },
];

const VisitorChart = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data} margin={{ top: 4, right: 8, left: -30, bottom: 0 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 8 }}
          interval={0}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 10 }}
          ticks={[0, 100, 200, 300, 400]}
          domain={[0, 400]}
        />
        <Tooltip
          cursor={{ stroke: "#CBD5E1", strokeWidth: 1 }}
          contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }}
        />
        <Legend
          verticalAlign="bottom"
          height={30}
          iconType="square"
          iconSize={10}
          formatter={(value) => (
            <span style={{ fontSize: 10, fontWeight: 500, color: "#4B5563" }}>{value}</span>
          )}
          wrapperStyle={{ paddingTop: 0,  marginLeft: 20 }}
        />
        <Line
          type="monotone"
          dataKey="loyal"
          name="Loyal Customers"
          stroke="#7C3AED"
          strokeWidth={3}
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="newCustomers"
          name="New Customers"
          stroke="#EF4444"
          strokeWidth={3}
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="unique"
          name="Unique Customers"
          stroke="#22C55E"
          strokeWidth={3}
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitorChart;
