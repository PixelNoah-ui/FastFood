"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useCreateShippingAddress } from "@/hooks/useCreateShippingAddress";
import { useCartStore } from "@/store/useCartStore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { chapaPayment } from "../api/chapa";

export default function CheckoutPage() {
  const { createAddress } = useCreateShippingAddress();
  const { data: session } = useSession();
  const { items, getSubtotal } = useCartStore((state) => state);

  type FormValues = {
    fullName: string;
    phoneNumber: string;
    email?: string;
    address: string;
    delveryInstructions?: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      delveryInstructions: "",
    },
  });

  const [isAddressSaved, setIsAddressSaved] = useState(false);

  const onSubmit = async (data: FormValues) => {
    if (!data) return;
    if (!session?.user.id) return;
    try {
      await createAddress({ userData: data, userId: session?.user.id });
      setIsAddressSaved(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  function handlePaymentClick() {
    if (!session?.user?.id) {
      console.error("User not logged in");
      return;
    }

    if (items.length === 0) {
      console.error("Cart is empty");
      return;
    }
    chapaPayment({ cartItems: items, userId: session?.user.id });
  }
  return (
    <div className="mx-auto flex h-fit max-w-7xl items-center justify-center bg-[#fbf8f3d4] px-5 py-10">
      <div className="flex w-full flex-col gap-8 border bg-white px-5 pt-8 shadow-lg lg:flex-row lg:gap-10">
        <div className="basis-2/3 space-y-5">
          <h1 className="text-xl font-medium md:text-2xl">
            Add Shipping Address
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-8">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="w-full basis-1/2 space-y-2">
                <span>Full Name</span>
                <Input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Enter your full name"
                  className="rounded-none"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="w-full basis-1/2 space-y-2">
                <span>Phone Number</span>
                <Input
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9]{7,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  placeholder="+251..."
                  className="rounded-none"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="w-full basis-1/2 space-y-2">
                <span>Email (Optional)</span>
                <Input
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="you@example.com"
                  className="rounded-none"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="w-full basis-1/2 space-y-2">
                <span>Address</span>
                <Input
                  {...register("address", { required: "Address is required" })}
                  placeholder="123 Main St, Addis Ababa"
                  className="rounded-none"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full space-y-2">
              <span>Delivery Instructions (optional)</span>
              <Textarea
                {...register("delveryInstructions", {
                  maxLength: { value: 300, message: "Instructions too long" },
                })}
                placeholder="E.g. Leave at the gate or call when you arrive"
                className="min-h-[80px] rounded-none"
              />
              {errors.delveryInstructions && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.delveryInstructions.message}
                </p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="text-background w-full cursor-pointer rounded-none"
            >
              {isSubmitting ? "Saving..." : "Save and Deliver here"}
            </Button>
          </form>
        </div>

        <div className="bg-border h-full w-[1px]" />

        <div className="basis-1/3 space-y-4 py-3">
          <h1 className="text-xl font-medium md:text-2xl">Summary</h1>

          <div>
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex items-center justify-between gap-2">
              <span>Order Total</span> <span>{getSubtotal() || 0} ETB</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>Delivery Charge</span> <span>Free</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Delivery Summary</h3>
            <ScrollArea className="h-48 space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 border-b border-gray-200 py-3 last:border-0 last:pb-0"
                >
                  <div className="relative h-20 w-28">
                    <Image
                      src={item.image || "placholder.png"}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold">{item.name}</h2>
                    <div className="flex items-center gap-2">
                      <span>{item.price}</span> <span> x {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>

          <div className="bg-border h-[2px] w-full" />

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 font-semibold">
              <span>Total Payable</span>
              <span>{getSubtotal() || 0} ETB</span>
            </div>
            <Button
              disabled={!isAddressSaved}
              onClick={handlePaymentClick}
              className="w-full cursor-pointer rounded-none bg-green-600 text-white hover:bg-green-700"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
