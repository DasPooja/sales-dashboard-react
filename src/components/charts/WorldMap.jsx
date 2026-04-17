import WorldMap from "react-svg-worldmap";

const data = [
  { country: "us", value: 100 },
  { country: "br", value: 80 },
  { country: "in", value: 90 },
  { country: "cn", value: 95 },
  { country: "au", value: 70 },
  { country: "za", value: 60 },
];

const SalesMap = () => {
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <WorldMap
        color="blue"
        value-suffix="sales"
        size="sm"
        data={data}
      />
    </div>
  );
};

export default SalesMap;