import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./Provider";
import { SessionProvider } from "next-auth/react";
const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${tinos.className} antialiased`}>
        <ReactQueryProvider>
          <Header />
          <SessionProvider>{children}</SessionProvider>
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
