export default function Dropdown({ name, options }: { name: string; options: string[] }) {
  return (
    <select
      defaultValue={name}
      className="h-fit border-primary-dark bg-primary-light text-primary-dark border rounded outline-none tracking-wider px-4 py-2"
    >
      <option disabled>{name}</option>
      {options.map((value: string, idx: number) => (
        <option key={value + "-" + idx}>{value}</option>
      ))}
    </select>
  );
}
