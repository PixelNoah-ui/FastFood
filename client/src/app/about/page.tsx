"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useState } from "react";
import Subscribe from "@/Feature/Subscribe";

export default function AboutPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-[#FBF8F3]">
      <section className="flex min-h-screen flex-col items-center bg-[#FAF7F2]">
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative aspect-video w-[90%] max-w-4xl">
                <iframe
                  className="h-full w-full rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="About Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-10 right-0 text-white"
                >
                  <X size={30} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative flex h-72 w-full flex-col items-center justify-center bg-black">
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-white">
            ABOUT US
          </h1>
          <p className="text-sm text-gray-300">
            Home Page &gt; <span className="text-white">About us</span>
          </p>
          <div className="absolute inset-0">
            <Image
              src="/about/about.png"
              alt="About background"
              fill
              className="object-cover opacity-40"
            />
          </div>
        </div>

        <div className="relative container mx-auto flex flex-col items-center gap-12 px-6 py-16 lg:flex-row">
          <div className="hidden basis-1/4 justify-center lg:flex lg:w-full">
            <Image
              src="/about/about1.png"
              alt="Fried Chicken and Fries"
              width={420}
              height={420}
              className="rounded-xl object-contain"
            />
          </div>

          <div className="max-w-xl basis-3/4 space-y-5 text-center lg:w-full lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
              About Our Food
            </p>
            <h2 className="text-4xl leading-tight font-extrabold text-gray-900 lg:text-5xl">
              Best Burger Ideas & Traditions From the Whole World
            </h2>
            <p className="leading-relaxed text-gray-600">
              The mouth-watering aroma of sizzling burgers now fills the streets
              of Birmingham thanks to the passionate pursuit of three brothers,
              the British founders of Faz Food.
            </p>
            <p className="leading-relaxed text-gray-600">
              After over 50 years of experience in the culinary industry between
              them, they set out on a journey to discover the ultimate burger.
            </p>
            <Button className="mt-4 rounded-none bg-green-600 px-6 py-3 text-sm text-white hover:bg-green-700">
              ABOUT OUR FOOD
            </Button>
          </div>

          <motion.div
            className="absolute top-1/2 right-6 hidden -translate-y-1/2 items-center justify-center lg:right-16 lg:flex"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
            }}
          >
            <div className="absolute">
              <Image
                src="/about/rotate.png"
                alt="Rotating Badge"
                width={130}
                height={130}
                className="object-contain"
              />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              className="relative"
            >
              <defs>
                <linearGradient
                  id="paint0_linear_815_2"
                  x1="116"
                  y1="49"
                  x2="0"
                  y2="49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C33130"></stop>
                  <stop offset="1" stopColor="#FF8A00"></stop>
                </linearGradient>
                <clipPath id="clip0_815_2">
                  <rect
                    width="44"
                    height="42"
                    fill="white"
                    transform="translate(32 36)"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#clip0_815_2)">
                <path
                  d="M66.2741 36H55.308L62.7689 43.8439C64.368 42.8589 66.4934 43.0527 67.8811 44.4293L74.0221 50.5208C74.3132 50.8096 74.5246 51.1221 74.6322 51.395C74.7399 51.6679 74.7399 51.9013 74.6123 52.0279C74.3571 52.281 73.6752 52.02 73.093 51.4425L67.3428 45.7346C66.7606 45.1571 66.0787 44.8921 65.8235 45.1492C65.6959 45.2758 65.6959 45.5091 65.8035 45.7821C65.9112 46.055 66.1225 46.3675 66.4136 46.6562L72.1678 52.3601C72.4589 52.6489 72.6703 52.9614 72.778 53.2343C72.8856 53.5073 72.8856 53.7406 72.758 53.8672C72.5028 54.1204 71.8209 53.8593 71.2387 53.2818L65.4845 47.5779C64.9023 47.0004 64.2204 46.7354 63.9652 46.9925C63.8376 47.119 63.8376 47.3524 63.9453 47.6254C64.0529 47.8983 64.2643 48.2108 64.5554 48.4995L70.3096 54.2034C70.6007 54.4922 70.812 54.8047 70.9197 55.0776C71.0274 55.3505 71.0274 55.5839 70.8998 55.7105C70.6446 55.9636 69.9627 55.7026 69.3805 55.1251L63.6302 49.4212C63.048 48.8437 62.3661 48.5786 62.1109 48.8358C61.9833 48.9623 61.9833 49.1957 62.091 49.4686C62.1987 49.7416 62.41 50.0541 62.7011 50.3428L68.4553 56.0467C68.7464 56.3355 68.9578 56.648 69.0654 56.9209C69.1731 57.1938 69.1731 57.4272 69.0455 57.5538C68.7903 57.8069 68.1084 57.5459 67.5262 56.9684L61.3852 50.8768C59.9975 49.5003 59.7981 47.3959 60.787 45.8098L56.5322 41.8344C52.5285 38.0885 47.2329 36 41.7299 36C36.3545 36 32 40.3195 32 45.6515V59.0411C32 64.3731 36.3545 68.6926 41.7299 68.6926H55.4316L53.2503 60.56C50.8099 60.5204 48.3016 58.2974 47.2768 55.038C46.0765 51.2249 47.3565 47.4355 50.1359 46.5732C52.9154 45.7148 56.1414 48.1079 57.3417 51.9211C58.3665 55.1804 57.5809 58.424 55.5951 59.8322L61.1659 77.5214C61.3493 78.1384 62.2186 78.1622 62.4379 77.557L66.2701 68.6886C71.6455 68.6886 76 64.3692 76 59.0371V45.6515C76 40.3195 71.6455 36 66.2741 36Z"
                  fill="url(#paint0_linear_815_2)"
                />
              </g>
            </svg>
          </motion.div>
        </div>
        <div className="relative flex h-[70vh] w-full flex-col items-center justify-center text-center">
          <Image
            src="/about/about.png"
            alt="Fried Chicken Background"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40" />

          <motion.button
            onClick={() => setIsVideoOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white text-white transition-all hover:bg-white/10"
          >
            <Play size={40} fill="white" />
            <span className="absolute -bottom-10 text-xs font-semibold tracking-widest uppercase">
              Video Hot Burger
            </span>
          </motion.button>

          <h1 className="z-10 mt-14 text-5xl font-extrabold text-white">
            Welcome to Faz Food
          </h1>
        </div>
        <div className="w-full bg-[#FBF8F3] px-6 py-24">
          <div className="container mx-auto flex flex-col items-center justify-center gap-12 lg:flex-row">
            <div className="flex justify-center transition-all duration-600 hover:scale-[1.08] lg:w-1/2">
              <Image
                src="/about/about2.png"
                alt="Burger, Fries, and Drink"
                width={600}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="text-center lg:w-1/2 lg:text-left">
              <p className="text-sm font-semibold text-red-600 uppercase">
                Our Food Promise
              </p>
              <h2 className="mt-3 text-5xl leading-tight font-extrabold text-gray-900">
                MADE RIGHT.
                <br />
                MADE ESPECIALLY
                <br />
                FOR YOU.
              </h2>
              <p className="mt-5 leading-relaxed text-gray-600">
                Bold fiery flavours are our style. We’re here to bring a new
                sizzle to the face of fast-casual dining.
              </p>

              <div className="mt-8 flex flex-col items-center justify-start gap-6 lg:flex-row">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-red-600">23+</h3>
                  <p className="text-sm tracking-wide text-gray-700 uppercase">
                    Years Experience
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-red-600">580+</h3>
                  <p className="text-sm tracking-wide text-gray-700 uppercase">
                    Different Burgers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </div>
  );
}
