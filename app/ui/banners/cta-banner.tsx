import Image from "next/image";

export default function CtaBanner() {
  return (
    <div className="flex items-start gap-2 bg-primary-light p-3 shadow-sm">
      <svg
        width="48"
        height="24"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9L9 12.375M9 6.49841V6.46875M2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9Z"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-primary text-justify">
        We only provide new options if there are discounts.{" "}
        <span className="text-primary-dark underline cursor-pointer">Sign in</span> to include your
        credit card offers.
      </p>
    </div>
  );
}
