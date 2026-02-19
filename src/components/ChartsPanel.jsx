import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "react-bootstrap";

export default function ChartsPanel({
  data,
  title,
  dataKeyLabel = "Значение",
}) {
  return (
    <Card className="border-0 bg-light">
      <Card.Body>
        <div className="fw-semibold mb-3">{title}</div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              formatter={(value) => [value, dataKeyLabel]}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              name={dataKeyLabel}
              stroke="#198754"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}
