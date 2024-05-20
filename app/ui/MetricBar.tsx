import Image from "next/image";
import Link from "next/link";

export default function MetricBar({
  iconPath,
  name,
  href,
}: {
  iconPath: string;
  name: string;
  href: string;
}) {
  return (
    <Link href={href} className="w-1/2 shadow">
      <button type="button" className="w-full flex gap-4 items-center bg-white rounded-md p-2">
        <Image src={iconPath} width={24} height={24} alt="" />
        <p>{name}</p>
      </button>
    </Link>
  );
}
