export default function FilterSortDropdown({
  type,
  name,
  options,
}: {
  type: "filter" | "sort";
  name: string;
  options: string[];
}) {
  return (
    <select
      name={name}
      className={`${
        type === "filter"
          ? "border-primary-dark bg-primary-light text-primary"
          : type === "sort"
          ? "border-secondary-dark bg-secondary-light text-secondary-dark"
          : ""
      } px-1 py-2 border-2 rounded font-bold tracking-wide`}
    >
      {options.map((value: string, idx: number) => (
        <option key={value + "-" + idx}>{value}</option>
      ))}
    </select>
  );
}
