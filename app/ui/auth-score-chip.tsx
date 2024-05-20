export default function AuthScoreChip({ authScore }: { authScore: number }) {
  const tagClasses =
    authScore < 50
      ? "bg-error-light text-error"
      : authScore > 50 && authScore < 80
      ? "bg-warning-light text-warning"
      : "bg-success-light text-success";

  const iconColor =
    authScore < 50 ? "#FA012C" : authScore > 50 && authScore < 80 ? "#E1A800" : "#31A64F";

  return (
    <div className={`w-fit flex gap-2 rounded-full px-2 py-1 ${tagClasses}`}>
      <p className="text-xs text-nowrap">{authScore}% authenticity score</p>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9L9 12.375M9 6.49841V6.46875M2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9Z"
          stroke={iconColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
