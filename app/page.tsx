import Search from "./ui/search";

export default function Home() {
  return (
    <section className="h-full flex flex-col text-center text-xl mx-4">
      <h1 className="my-16">
        <span className="block">Search for luxury</span>
        <span className="block">
          <span className="font-bold text-primary">fashion</span> and{" "}
          <span className="font-bold text-secondary-light">jewelry</span>
        </span>
        <span className="block font-bold text-2xl leading-8 tracking-widest">ALL OVER</span>
        <span className="block">the world!</span>
      </h1>
      <Search />
    </section>
  );
}
