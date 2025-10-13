"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Subscribe from "@/Feature/Subscribe";
import Image from "next/image";
import { useState } from "react";

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div>
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden bg-black">
        <h1 className="z-10 mb-2 text-5xl font-extrabold tracking-tight text-white">
          FAQ’s
        </h1>
        <p className="z-10 text-sm text-gray-300">
          Home Page &gt; <span className="text-white">FAQ’s</span>
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

      <div className="bg-background text-foreground w-full py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-5xl font-extrabold tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={openItem ?? ""}
                onValueChange={setOpenItem}
              >
                <AccordionItem value="how-work">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "how-work"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    HOW DOES THIS WORK?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Our platform connects you with local restaurants in real
                    time. Browse menus, customize your order, and check out
                    securely through our app or website. Once your order is
                    confirmed, it’s sent directly to the restaurant kitchen.
                    Delivery updates are pushed to your dashboard and you’ll
                    receive text notifications when your driver is on the way.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="different-restaurants">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "different-restaurants"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    CAN I ORDER FROM DIFFERENT RESTAURANTS AT THE SAME TIME?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes, you can! Our multi‑cart system allows you to choose
                    items from several local restaurants at once. Each order is
                    processed independently so that preparation and delivery
                    times are optimal. You’ll see multiple delivery drivers
                    assigned if orders are from different locations.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="missing-menu">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "missing-menu"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    SOME MENUS ARE MISSING ON A RESTAURANT PAGE?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Occasionally, restaurants may update their offerings or
                    temporarily disable certain dishes due to unavailable
                    ingredients. If a menu looks incomplete, refresh later or
                    contact our support team — we sync menu data daily from our
                    restaurant partners and can verify if those dishes are
                    returning soon.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="peanut">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "peanut"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    DOES YOUR PIZZA CONTAIN PEANUTS OR PEANUT OIL?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    No. We take allergy concerns very seriously. Our pizza dough
                    and sauces are made in a peanut‑free environment, and we do
                    not use peanut oil for frying or baking. All our suppliers
                    certify that their ingredients are free from peanut-based
                    products.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="vegan">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "vegan"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    ARE YOUR DOUGHS VEGAN OR VEGETARIAN FRIENDLY?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes. Our dough contains only flour, yeast, olive oil, sugar,
                    and salt — no dairy or animal products. Most of our sauces
                    and toppings are also vegan-friendly, and we clearly mark
                    all plant‑based menu items. You can substitute vegan cheese
                    or plant‑based meat alternatives for any pizza.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="gluten">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "gluten"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    DOES YOUR PEPPERONI CONTAIN GLUTEN?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Our standard pepperoni is gluten‑free and sourced from
                    certified suppliers. However, cross‑contamination can occur
                    during handling in kitchens that also prepare wheat‑based
                    dough. For those with severe gluten sensitivity or celiac
                    disease, we recommend our gluten‑free crust and toppings
                    stored separately to minimize exposure.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={openItem ?? ""}
                onValueChange={setOpenItem}
              >
                <AccordionItem value="price">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "price"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    ARE YOUR MENU PRICES THE SAME AS THOSE AT THE RESTAURANT?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Most restaurants maintain identical pricing to their
                    in‑house menu. However, some may include a small service fee
                    to cover the cost of packaging and delivery logistics.
                    You’ll always see prices upfront — there are no hidden
                    charges at checkout.
                  </AccordionContent>
                </AccordionItem>

                <Separator className="my-2" />

                <AccordionItem value="how-work-2">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "how-work-2"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    HOW DOES THIS WORK?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Simply create an account, add your favorite items to the
                    cart, and proceed to checkout. You can track preparation and
                    delivery in real time. We collaborate directly with
                    restaurants to ensure accuracy and speed, making your dining
                    experience effortless.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="vegan-2">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "vegan-2"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    ARE YOUR DOUGHS VEGAN OR VEGETARIAN FRIENDLY?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolutely. We proudly offer 100% vegan doughs crafted from
                    sustainable, plant‑based ingredients. Our chefs also provide
                    gluten‑free and low‑carb alternatives, ensuring that
                    everyone can enjoy a slice without compromise.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="peanut-2">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "peanut-2"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    DOES YOUR PIZZA CONTAIN PEANUTS OR PEANUT OIL?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We maintain a strict peanut‑free kitchen policy. All our
                    cooking oils are 100% soybean or canola based. Ingredient
                    suppliers are vetted for allergen safety on a regular basis.
                    If you have a severe allergy, kindly inform us in the notes
                    at checkout so additional precautions can be taken.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="order-2">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "order-2"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    CAN I ORDER FROM DIFFERENT RESTAURANTS AT THE SAME TIME?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes. When ordering from multiple restaurants, our system
                    automatically separates bills and delivery routes. You’ll
                    get detailed ETAs for each restaurant. Your items may arrive
                    separately but as fresh and fast as possible.
                  </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="missing-2">
                  <AccordionTrigger
                    className={`text-lg font-bold transition-colors ${
                      openItem === "missing-2"
                        ? "text-destructive"
                        : "text-foreground"
                    }`}
                  >
                    SOME MENUS ARE MISSING ON A RESTAURANT PAGE?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    This usually occurs when our partner restaurant is updating
                    their digital menu or certain items are temporarily
                    unavailable. We refresh databases every 12 hours, so
                    re‑checking later will likely resolve the issue. You can
                    also click “Request Menu Update” to notify our support team
                    instantly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
