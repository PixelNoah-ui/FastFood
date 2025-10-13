"use client";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-sidebar-border border-t">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FazFood Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Jimma, Arat-Anbessa, Ethiopia
          </p>
          <p className="text-muted-foreground text-sm">pixelnoa8@gmail.com</p>
          <p className="text-destructive text-sm font-semibold">
            +251911477218
          </p>
        </div>

        <div>
          <h3 className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
            Products
          </h3>
          <ul className="text-muted-foreground space-y-2 text-sm">
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
          <h3 className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
            Quick Links
          </h3>
          <ul className="text-muted-foreground flex flex-col space-y-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contacts</Link>
          </ul>
        </div>

        <div>
          <h3 className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
            Opening Hours
          </h3>
          <p className="text-muted-foreground text-sm">
            Monday - Friday:{" "}
            <span className="text-primary font-medium">8am – 4pm</span>
          </p>
          <p className="text-muted-foreground text-sm">
            Saturday:{" "}
            <span className="text-primary font-medium">8am – 12am</span>
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
              <button
                key={i}
                className="border-border text-muted-foreground hover:text-primary hover:border-primary flex size-9 items-center justify-center rounded-full border transition"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-sidebar-border text-muted-foreground border-t py-4 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">FazFood</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
