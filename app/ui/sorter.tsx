export default function Sorter() {
  return (
    <div className="flex text-primary-dark justify-end items-end">
      <div className="flex items-center gap-2 py-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6875 4.78125L13.2188 2.25M13.2188 2.25L15.75 4.78125M13.2188 2.25L13.2187 15.75M7.3125 13.2188L4.78125 15.75M4.78125 15.75L2.25 13.2188M4.78125 15.75L4.78125 2.25"
            stroke="#4D16A7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-nowrap">Sort by</p>
      </div>
    </div>
  );
}
