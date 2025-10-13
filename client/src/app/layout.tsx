import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./Provider";
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
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
