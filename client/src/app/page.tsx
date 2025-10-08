import Hero from "@/Feature/Hero";
import PopularDishes from "@/Feature/PopularDishes";
import WhyChooseUs from "@/Feature/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-chart-4/10 space-y-5">
      <Hero />
      <div className="mx-auto max-w-7xl space-y-12 px-8 py-10">
        <WhyChooseUs />
        <PopularDishes />
      </div>
    </div>
  );
}
