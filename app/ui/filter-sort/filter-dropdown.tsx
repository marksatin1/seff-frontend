export default function FilterDropdown({ name, options }: { name: string; options: string[] }) {
  return (
    <select
      defaultValue={name}
      className="border-secondary-light bg-neutral-light text-secondary px-1 py-2 border-2 rounded outline-none font-bold tracking-wide"
    >
      <option disabled>{name}</option>
      {options.map((value: string, idx: number) => (
        <option key={value + "-" + idx}>{value}</option>
      ))}
    </select>
  );
}
