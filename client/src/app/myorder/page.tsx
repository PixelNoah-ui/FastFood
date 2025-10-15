"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MyOrderPage() {
  const invoices = [
    {
      orderId: "ORD-1001",
      productName: "Classic Beef Burger",
      qty: 2,
      price: "₦3,500",
      paymentMethod: "Credit Card",
      status: "Delivered",
    },
    {
      orderId: "ORD-1002",
      productName: "Chicken Deluxe Combo",
      qty: 1,
      price: "₦2,700",
      paymentMethod: "PayPal",
      status: "In Progress",
    },
    {
      orderId: "ORD-1003",
      productName: "Double Cheese Burger",
      qty: 3,
      price: "₦4,800",
      paymentMethod: "Bank Transfer",
      status: "Pending",
    },
    {
      orderId: "ORD-1004",
      productName: "Veggie Wrap",
      qty: 1,
      price: "₦1,900",
      paymentMethod: "Credit Card",
      status: "Delivered",
    },
    {
      orderId: "ORD-1005",
      productName: "Spicy Chicken Wings",
      qty: 2,
      price: "₦3,200",
      paymentMethod: "Apple Pay",
      status: "Delivered",
    },
    {
      orderId: "ORD-1006",
      productName: "Crispy Fries Pack",
      qty: 4,
      price: "₦2,000",
      paymentMethod: "PayPal",
      status: "Pending",
    },
    {
      orderId: "ORD-1007",
      productName: "Family Burger Box",
      qty: 1,
      price: "₦7,800",
      paymentMethod: "Credit Card",
      status: "Delivered",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [tracked, setTracked] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleTrack = () => {
    if (!orderId.trim()) return;
    setLoading(true);
    setTracked(false);
    setTimeout(() => {
      setLoading(false);
      setTracked(true);
    }, 2000);
  };

  const steps = [
    { text: "Order placed", done: true },
    { text: "Preparing your order", done: true },
    { text: "Out for delivery", done: false },
    { text: "Delivered", done: false },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Your <span className="text-primary">Order</span>
      </h1>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full basis-1/3 border px-6 py-5 shadow-md">
          <p className="mb-4 font-semibold">
            Insert your order ID to track your order
          </p>
          <div className="space-y-3">
            <label className="block text-sm font-medium">Order ID</label>
            <Input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID"
              className="w-full rounded-none"
            />
          </div>
          <Button
            onClick={handleTrack}
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center rounded-none"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Tracking...
              </>
            ) : (
              "Track"
            )}
          </Button>
        </div>

        <div className="w-full basis-2/3 space-y-6">
          {tracked ? (
            <>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Delivery Summary</h3>
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="relative h-20 w-28">
                    <Image
                      src="/about/about.png"
                      alt="burger"
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold">Burger Order #{orderId}</h2>
                    <p className="text-sm text-gray-500">
                      Expected on 21 May 2025
                    </p>
                    <span className="font-medium">3777 ETB</span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-start space-y-8">
                <div className="absolute top-4 left-4 h-[calc(100%-2rem)] w-[3px] bg-gray-200" />
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative z-10 flex items-center gap-3"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        step.done ? "bg-primary text-white" : "bg-gray-300"
                      }`}
                    >
                      <Check size={16} />
                    </div>
                    <p
                      className={`text-sm ${
                        step.done
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-muted-foreground flex h-full items-center justify-center">
              Enter your Order ID to view details
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 border px-5 py-2 shadow-md">
        <h1 className="font-bold">All Order</h1>
        <div className="flex items-center justify-between gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By:" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">New</SelectItem>
                <SelectItem value="old">Old</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Input placeholder="Search your order" className="rounded-none" />
          </div>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">OrderID</TableHead>
              <TableHead className="w-[100px]">Product Name</TableHead>
              <TableHead className="w-[100px]">Qty</TableHead>
              <TableHead className="w-[100px]">Price</TableHead>
              <TableHead className="w-[100px]">Method</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>{invoice.orderId}</TableCell>
                <TableCell>{invoice.productName}</TableCell>
                <TableCell>{invoice.qty}</TableCell>
                <TableCell>{invoice.price}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell
                  className={`text-right font-medium ${
                    invoice.status === "Delivered"
                      ? "text-green-600"
                      : invoice.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                  }`}
                >
                  {invoice.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
