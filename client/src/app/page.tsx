import DeliverySection from "@/Feature/DeliverySection";
import Hero from "@/Feature/Hero";
import PopularDishes from "@/Feature/PopularDishes";
import Reservation from "@/Feature/Reservation";
import Subscribe from "@/Feature/Subscribe";
import WhyChooseUs from "@/Feature/WhyChooseUs";

export default function Home() {
  return (
    <div className="space-y-20 bg-[#FBF8F3]">
      <Hero />
      <div className="mx-auto max-w-7xl space-y-20 px-8 py-10">
        <WhyChooseUs />
        <PopularDishes />
      </div>
      <div className="h-full bg-[#0a7a3f]">
        <DeliverySection />
      </div>
      <Reservation />
      <Subscribe />
    </div>
  );
}
