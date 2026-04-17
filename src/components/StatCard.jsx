const StatCard = ({ title, value, color, icon, circleColor, summaryText }) => {
  return (
    <div className={`p-4 rounded-2xl ${color} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-full shadow ${circleColor}`}>
          {icon}
        </div>
      </div>

        <h2 className="text-[16px] font-bold mt-2">{value}</h2>
        <p className="text-xs font-semibold mt-1">{title}</p>
        <p className="text-[9px] font-semibold text-indigo-500 mt-1 truncate">{summaryText}</p>
    </div>
  );
};

export default StatCard;