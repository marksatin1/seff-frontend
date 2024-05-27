import { Dispatch, SetStateAction } from "react";

export default function FilterButton({
  showFilters,
  setShowFilters,
}: {
  showFilters: boolean;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setShowFilters(!showFilters)}
      className="w-12 h-12 drop-shadow-lg cursor-pointer"
    >
      <rect width="256" height="256" rx="32" fill={showFilters ? "#FFB800" : "#8B5BF6"} />
      <path
        d="M64 80L128 80M64 128H128M128 128V144M128 128V112M64 176H96M128 176L192 176M160 128H192M160 80L192 80M160 80V96M160 80V64M100 192V160"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
