"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="relative h-[80vh] overflow-hidden"
      style={{
        backgroundImage: "url('/hero/hero1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center space-y-6 px-8 py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-chart-4 text-3xl capitalize"
        >
          Fast Food burger
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.4,
          }}
          className="text-4xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          <h1>BEST</h1>
          <h2>BURGERS</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className="max-w-lg text-lg text-white"
        >
          Enjoy freshly made burgers with the juiciest patties, melted cheese,
          and crispy toppings. Fast, delicious, and made just for you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.8,
          }}
        >
          <Button asChild className="rounded-none px-6">
            <Link href="/menu">Order now</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
