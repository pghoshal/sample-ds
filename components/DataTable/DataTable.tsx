export interface DataTableProps {
  /** Accessible table label. */
  ariaLabel: string;
  /** Row density for enterprise data. */
  density: "compact" | "comfortable";
  /** Whether column headers expose sort controls. @default true */
  sortable?: boolean;
}

export function DataTable(_props: DataTableProps) {
  return null;
}

