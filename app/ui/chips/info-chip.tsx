export default function InfoChip({ message }: { message: string }) {
  return (
    <div className="w-fit flex items-center gap-1 py-1">
      <p className="text-paper-dark text-xs text-nowrap">{message}</p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9L9 12.375M9 6.49841V6.46875M2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9Z"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
