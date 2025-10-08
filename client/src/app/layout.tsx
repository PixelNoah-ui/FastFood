import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./Header";

// const tinos = Tinos({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "700"],
// });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FastBite | Fresh & Fast Food Delivery",
    template: "%s | FastBite",
  },
  description:
    "Order delicious burgers, pizzas, and fries from FastBite — your go-to fast food delivery. Freshly made and delivered hot in minutes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
