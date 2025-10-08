import DeliverySection from "@/Feature/DeliverySection";
import Hero from "@/Feature/Hero";
import PopularDishes from "@/Feature/PopularDishes";
import Reservation from "@/Feature/Reservation";
import Subscribe from "@/Feature/Subscribe";
import WhyChooseUs from "@/Feature/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-chart-4/10">
      <Hero />
      <div className="mx-auto max-w-7xl space-y-12 px-8 py-10">
        <WhyChooseUs />
        <PopularDishes />
      </div>
      <div className="bg-[#0a7a3f]">
        <DeliverySection />
      </div>
      <Reservation />
      <Subscribe />
    </div>
  );
}
