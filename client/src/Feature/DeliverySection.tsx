"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike, UtensilsCrossed, PackageCheck } from "lucide-react";

export default function DeliverySection() {
  const delivery = [
    {
      id: 1,
      icon: Bike,
      title: "DELIVERY IN 30 MINUTES",
    },
    {
      id: 2,
      icon: UtensilsCrossed,
      title: "FREE SHIPPING FROM 75$",
    },
    {
      id: 3,
      icon: PackageCheck,
      title: "DELIVERY ON YOUR DOORSTEP",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 bg-[#0a7a3f] px-8 py-10 md:flex-row md:gap-6 lg:gap-8">
      <motion.div
        className="w-full md:basis-2/4"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          duration: 1.2,
        }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="relative aspect-[16/12] w-full overflow-hidden">
          <Image
            src="/delivery.png"
            alt="Delivery"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <div className="basis-2/4 space-y-12">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Your <span className="text-chart-4">Favorite Burger</span>, On The
          Way!
        </h1>
        <p className="text-background">
          From classic cheeseburgers to unique, gourmet creations, the world of
          burgers is vast and varied. At our fast food site, we offer a range of
          burger options to suit every taste and preference.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {delivery.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dotted border-white/70 bg-[#0a7a3f] px-8 py-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: item.id * 0.2,
                duration: 0.6,
                type: "tween",
              }}
              viewport={{ once: true }}
            >
              <item.icon size={44} className="mb-3 text-white" />
              <p className="text-center text-lg font-semibold text-white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
