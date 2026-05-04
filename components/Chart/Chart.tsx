export interface ChartProps {
  /** Chart visualization type. */
  kind: "bar" | "line" | "donut";
  /** Plain-language summary of the chart. */
  summary: string;
}

export function Chart(_props: ChartProps) {
  return null;
}

