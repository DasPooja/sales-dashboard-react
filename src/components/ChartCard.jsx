const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-xs h-full flex flex-col">
      <h3 className="font-bold mb-4">{title}</h3>
      <div className="flex-1 min-h-[180px] rounded-xl overflow-hidden">
        {children || (
          <div className="h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Chart
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartCard;