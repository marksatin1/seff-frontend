import Search from "./ui/search";

export default function LandingPage() {
  return (
    <div className="h-full flex flex-col text-center mx-4">
      <h1 className="my-16">
        <span className="block">Search for luxury</span>
        <span className="block">
          <span className="font-bold text-primary">fashion</span> and{" "}
          <span className="font-bold text-secondary-light">jewelry</span>
        </span>
        <span className="block font-bold text-xl leading-8 tracking-widest">ALL OVER</span>
        <span className="block">the world!</span>
      </h1>
      <Search />
    </div>
  );
}
