"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
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
import { useSession } from "next-auth/react";
import { useGetUserOrder } from "@/hooks/useGetUserorder";
import { OrderResponse, OrderItem } from "@/lib/orderResponseType";
import { Skeleton } from "@/components/ui/skeleton";

export default function MyOrderPage() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { orders, isLoading } = useGetUserOrder(userId as string);

  const totalOrder =
    orders?.reduce((acc, order) => {
      const orderItemCount = order.items.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      return acc + orderItemCount;
    }, 0) ?? 0;

  const [trackedOrder, setTrackedOrder] = useState<OrderResponse | null>(null);
  const [trackedItem, setTrackedItem] = useState<OrderItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [tracked, setTracked] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [orderSearch, setOrderSearch] = useState("");
  const [sortBy, setSortBy] = useState<string>("");

  const handleTrack = () => {
    if (!searchId.trim())
      return toast.error("Please enter Order ID or Dish ID");
    if (!orders || orders.length === 0) {
      return toast.error("No orders available to search");
    }

    setLoading(true);
    setTracked(false);

    setTimeout(() => {
      const id = searchId.trim();

      let foundOrder: OrderResponse | null = null;
      let foundItem: OrderItem | null = null;

      // Try to find by order._id or order.tx_ref
      foundOrder =
        orders.find((order) => order._id === id || order.tx_ref === id) || null;

      if (foundOrder) {
        // If the searchId also matches a dishId in this order, use that item
        foundItem =
          foundOrder.items.find((item) => item.dishId === id) ||
          foundOrder.items[0] ||
          null;
      } else {
        // Try to find by dishId across all orders
        for (const order of orders) {
          const item = order.items.find((item) => item.dishId === id);
          if (item) {
            foundOrder = order;
            foundItem = item;
            break;
          }
        }
      }

      if (foundOrder && foundItem) {
        setTrackedOrder(foundOrder);
        setTrackedItem(foundItem);
        setTracked(true);
      } else {
        setTrackedOrder(null);
        setTrackedItem(null);
        setTracked(false);
        toast.error("Order or Dish not found");
      }

      setLoading(false);
    }, 600);
  };

  const progressSteps = trackedOrder
    ? [
        { text: "Order placed", done: true },
        {
          text: "Preparing your order",
          done:
            trackedOrder.orderStatus === "preparing" ||
            trackedOrder.orderStatus === "delivered",
        },
        {
          text: "Out for delivery",
          done:
            trackedOrder.orderStatus === "out-for-delivery" ||
            trackedOrder.orderStatus === "delivered",
        },
        { text: "Delivered", done: trackedOrder.orderStatus === "delivered" },
      ]
    : [];

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl space-y-10 px-5 py-10">
        <Skeleton className="h-10 w-64" />
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="mb-4 h-24 w-full" />
        ))}
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
        <Image src="/empty-cart.png" alt="Empty" width={120} height={120} />
        <p className="text-muted-foreground">You have no orders yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Your <span className="text-primary">Orders</span>
      </h1>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        {/* Tracking Panel */}
        <div className="w-full basis-1/3 border px-6 py-5 shadow-md">
          <p className="mb-4 font-semibold">
            Insert your Order ID or Item ID to track your order
          </p>
          <Input
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Order ID or Item ID"
            className="mb-3 w-full rounded-none"
          />
          <Button
            onClick={handleTrack}
            disabled={loading}
            className="w-full rounded-none"
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

        {/* Delivery Summary */}
        <div className="w-full basis-2/3 space-y-6">
          {tracked && trackedOrder && trackedItem ? (
            <>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Delivery Summary</h3>
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="relative h-20 w-28">
                    <Image
                      src={trackedItem.image || "/about/about.png"}
                      alt={trackedItem.name || "order"}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold">
                      Order #
                      {trackedOrder.tx_ref?.slice(-6) ?? trackedOrder._id}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {trackedOrder.createdAt
                        ? new Date(trackedOrder.createdAt).toLocaleString()
                        : "-"}
                    </p>
                    <span className="font-medium">
                      {trackedItem.subtotal ?? trackedOrder.amount} ETB
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="relative flex flex-col items-start space-y-8">
                <div className="absolute top-4 left-4 h-[calc(100%-2rem)] w-[3px] bg-gray-200" />
                {progressSteps.map((step, i) => (
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
              Enter your Order ID or Item ID to view details
            </div>
          )}
        </div>
      </div>

      {/* All Orders Table */}
      <div className="space-y-3 border px-5 py-2 shadow-md">
        <h1 className="font-bold">All Orders</h1>

        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By:" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="old">Oldest</SelectItem>
                <SelectItem value="progress">In Progress</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search by Dish ID or Name"
            className="max-w-xs rounded-none"
            value={orderSearch}
            onChange={(e) => setOrderSearch(e.target.value)}
          />
        </div>

        <Table>
          <TableCaption>Your recent orders</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Dish ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {(() => {
              // Flatten all items with their order reference
              let allItems: Array<{ order: OrderResponse; item: OrderItem }> =
                [];
              orders.forEach((order) => {
                order.items.forEach((item) => {
                  allItems.push({ order, item });
                });
              });

              // Filter by search
              if (orderSearch.trim()) {
                const search = orderSearch.trim().toLowerCase();
                allItems = allItems.filter(
                  ({ item }) =>
                    item.dishId.toLowerCase().includes(search) ||
                    (item.name && item.name.toLowerCase().includes(search)),
                );
              }

              // Sort
              if (sortBy === "newest") {
                allItems.sort(
                  (a, b) =>
                    new Date(b.order.createdAt).getTime() -
                    new Date(a.order.createdAt).getTime(),
                );
              } else if (sortBy === "old") {
                allItems.sort(
                  (a, b) =>
                    new Date(a.order.createdAt).getTime() -
                    new Date(b.order.createdAt).getTime(),
                );
              } else if (sortBy === "progress") {
                allItems = allItems.filter(
                  ({ order }) => order.orderStatus !== "delivered",
                );
              } else if (sortBy === "delivered") {
                allItems = allItems.filter(
                  ({ order }) => order.orderStatus === "delivered",
                );
              }

              return allItems.map(({ order, item }) => (
                <TableRow key={`${order._id}-${item._id}`}>
                  <TableCell>{item.dishId}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.subtotal} ETB</TableCell>
                  <TableCell>{order.paymentMethod || "N/A"}</TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      order.orderStatus === "delivered"
                        ? "text-green-600"
                        : order.orderStatus === "preparing"
                          ? "text-yellow-600"
                          : "text-blue-600"
                    }`}
                  >
                    {order.orderStatus}
                  </TableCell>
                </TableRow>
              ));
            })()}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total Orders</TableCell>
              <TableCell className="text-right">{totalOrder} Orders</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
