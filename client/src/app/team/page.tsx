"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function meetExpertTeam() {
  const teamMembers = [
    {
      name: "Pixel Noah",
      role: "Founder",
      bio: "Visionary behind PixelNoah, blending creativity and innovation in every project.",
      image: "/chef/founder.jpg",
    },
    {
      name: "Eric Erton",
      role: "Head Chef",
      bio: "Crafting flavors that define our brand, one dish at a time.",
      image: "/chef/chef2.png",
    },
    {
      name: "Jacob Hilton",
      role: "Executive Chef",
      bio: "Creating mouth-watering experiences through signature recipes.",
      image: "/chef/chef3.png",
    },
    {
      name: "Jef Rick",
      role: "Kitchen Porter",
      bio: "Ensuring the rhythm of our kitchen never skips a beat.",
      image: "/chef/chef1.png",
    },
  ];
  return (
    <div>
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden bg-black">
        <h1 className="z-10 mb-2 text-5xl font-extrabold tracking-tight text-white">
          Our Teams
        </h1>
        <p className="z-10 text-sm text-gray-300">
          Home Page &gt; <span className="text-white">our Team</span>
        </p>
        <div className="absolute inset-0">
          <Image
            src="/about/about.png"
            alt="FAQ background"
            fill
            className="object-cover opacity-40"
          />
        </div>
      </div>
      <section className="bg-[#FAF7F2] py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-foreground mb-14 text-4xl font-extrabold tracking-tight md:text-5xl">
            MEET OUR EXPERT CHEFS
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-4 text-white">
                      <Twitter className="h-5 w-5 transition hover:text-blue-400" />
                      <Facebook className="h-5 w-5 transition hover:text-blue-600" />
                      <Instagram className="h-5 w-5 transition hover:text-pink-500" />
                      <Linkedin className="h-5 w-5 transition hover:text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-gray-900">
                    {member.name}
                  </h3>
                  <div className="mx-auto my-2 inline-block rounded bg-green-600 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
