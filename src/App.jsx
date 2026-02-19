import { useMemo, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { rawMetrics } from "./data/metrics";
import { calculateMetrics } from "./utils/calculateMetrics";
import MetricsTable from "./components/MetricsTable";
import ChartsPanel from "./components/ChartsPanel";

export default function App() {
  const metrics = useMemo(() => calculateMetrics(rawMetrics), []);

  const [selected, setSelected] = useState(() =>
    metrics && metrics.length ? metrics[0] : null,
  );

  return (
    <Container>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <div>
            <MetricsTable
              data={metrics}
              selectedId={selected?.id}
              onSelect={setSelected}
            />
          </div>

          <div>
            {selected && (
              <ChartsPanel
                data={selected.chart}
                title={selected.name}
                dataKeyLabel={selected.unit || "Значение"}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
