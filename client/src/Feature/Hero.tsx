"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Best Burgers",
    subtitle:
      "Savor the perfect balance of smoky grilled patties, melted cheese, and our signature sauces. Each burger is crafted fresh, bursting with flavor, and made to satisfy your cravings instantly.",
    image: "/hero/hero1.png",
    buttonText: "Order Burger",
    accent: "Fast Food Burger",
  },
  {
    id: 2,
    title: "Crispy Fries",
    subtitle:
      "Golden, crunchy, and perfectly salted—our fries are the ultimate sidekick. Fried to perfection with a fluffy inside, served hot and seasoned just right to keep you coming back for more.",
    image: "/hero/hero2.png",
    buttonText: "Grab Some Fries",
    accent: "Crispy Fries Combo",
  },
  {
    id: 3,
    title: "Hot Pizzas",
    subtitle:
      "Freshly baked with premium cheese, zesty tomato sauce, and your favorite toppings. Each slice delivers a burst of cheesy delight straight from our oven to your plate.",
    image: "/hero/hero3.png",
    buttonText: "Try Pizza",
    accent: "Cheesy Perfection",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const bgImage = slides[current].image || "/hero/default-hero.png";

  return (
    <div className="relative h-[80vh] overflow-hidden bg-[#111]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center space-y-6 px-8">
            <motion.span
              key={slides[current].accent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-chart-5 text-xl font-medium tracking-wide uppercase"
            >
              {slides[current].accent}
            </motion.span>

            <motion.h2
              key={slides[current].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              key={slides[current].subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="max-w-2xl text-lg leading-relaxed text-gray-200"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild className="rounded-none px-6">
                <Link href="/menu">{slides[current].buttonText}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-chart-4 scale-110 ring-2 ring-yellow-300"
                : "bg-gray-400/70 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
