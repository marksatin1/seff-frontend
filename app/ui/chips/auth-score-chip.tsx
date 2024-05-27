export default function AuthScoreChip({ authScore }: { authScore: number }) {
  const chipColors =
    authScore < 50
      ? "bg-error-light text-error"
      : authScore > 50 && authScore < 80
      ? "bg-warning-light text-warning"
      : "bg-success-light text-success";

  const iconColor =
    authScore < 50 ? "#DC2626" : authScore > 50 && authScore < 80 ? "#EAB308" : "#16A34A";

  return (
    <div className={`w-fit flex items-center gap-1 rounded-full px-2 py-1 ${chipColors}`}>
      <p className="text-xs text-nowrap">{authScore}% authenticity score</p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9L9 12.375M9 6.49841V6.46875M2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9Z"
          stroke={iconColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
