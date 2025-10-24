import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#E5E7EB", "#3B82F6", "#F82424"]; // grey, blue, red

const ProgressChart = ({ data }) => (
  <PieChart width={180} height={180}>
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      paddingAngle={5}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);

export default ProgressChart;
