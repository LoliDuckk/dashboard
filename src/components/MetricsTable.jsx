import { Table, Badge } from "react-bootstrap";

export default function MetricsTable({ data, selectedId, onSelect }) {
  return (
    <Table hover responsive className="align-middle">
      <thead className="table-light">
        <tr>
          <th>Показатель</th>
          <th>Текущий день</th>
          <th>Вчера</th>
          <th>%</th>
          <th>Этот день недели</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => {
          const isSelected = row.id === selectedId;

          return (
            <tr
              key={row.id}
              onClick={() => onSelect(row)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelect(row);
              }}
              tabIndex={0}
              role="button"
              aria-selected={isSelected}
              className={isSelected ? "table-primary" : ""}
              style={{ cursor: "pointer" }}
            >
              <td className="fw-semibold">{row.name}</td>

              <td>{row.today.toLocaleString()}</td>

              <td>{row.yesterday.toLocaleString()}</td>

              <td>
                <Badge
                  bg={
                    row.percent > 0
                      ? "success"
                      : row.percent < 0
                        ? "danger"
                        : "secondary"
                  }
                >
                  {row.percent}%
                </Badge>
              </td>

              <td>{row.weekValue.toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
