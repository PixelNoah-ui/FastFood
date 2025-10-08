"use client";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-background border-border border-t bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Image
              src="/logo2.png"
              alt="FazFood Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">Jimma,Arat-Anbessa,Ethiopia</p>
          <p className="text-muted-foreground text-sm">pixelnoa8@gmail.com</p>
          <p className="text-destructive text-sm font-semibold">
            +251911477218
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Burgers</li>
            <li>King Delight Products</li>
            <li>Crispy Flavors</li>
            <li>Breakfast Products</li>
            <li>Kids Menus</li>
            <li>Desserts</li>
            <li>Beverages</li>
            <li>Sauces</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contacts</Link>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
            Opening Hours
          </h3>
          <p className="text-sm">
            Monday - Friday:{" "}
            <span className="text-destructive font-medium">8am – 4pm</span>
          </p>
          <p className="text-sm">
            Saturday:{" "}
            <span className="text-destructive font-medium">8am – 12am</span>
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
              <button
                key={i}
                className="border-border hover:border-primary hover:text-primary animate-fade-in flex size-9 items-center justify-center rounded-full border transition"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-border text-muted-foreground border-t py-4 text-center text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="text-destructive text-sm">Fazfood</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
