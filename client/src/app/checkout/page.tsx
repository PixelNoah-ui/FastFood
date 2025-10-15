import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="mx-auto flex h-[90vh] max-w-7xl items-center justify-center bg-[#fbf8f3d4] px-5 py-10">
      <div className="flex w-full flex-col gap-8 border bg-white px-5 pt-8 shadow-lg lg:flex-row lg:gap-10">
        <div className="basis-2/3 space-y-5">
          <h1 className="text-xl font-medium md:text-2xl">
            Add Shipping Address
          </h1>
          <form className="space-y-4 pb-8">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="w-full basis-1/2 space-y-2">
                <span>Full Name</span>
                <Input
                  placeholder="Enter your full name"
                  className="rounded-none"
                />
              </div>
              <div className="w-full basis-1/2 space-y-2">
                <span>Phone Number</span>
                <Input placeholder="+251..." className="rounded-none" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="w-full basis-1/2 space-y-2">
                <span>Email (Optional)</span>
                <Input placeholder="you@example.com" className="rounded-none" />
              </div>
              <div className="w-full basis-1/2 space-y-2">
                <span>Address</span>
                <Input
                  placeholder="123 Main St, Addis Ababa"
                  className="rounded-none"
                />
              </div>
            </div>

            <div className="w-full space-y-2">
              <span>Delivery Instructions (optional)</span>
              <Textarea
                placeholder="E.g. Leave at the gate or call when you arrive"
                className="min-h-[80px] rounded-none"
              />
            </div>

            <Button className="text-background w-full cursor-pointer rounded-none">
              Save and Deliver here
            </Button>
          </form>
        </div>

        <div className="bg-border h-full w-[1px]" />

        <div className="basis-1/3 space-y-4">
          <h1 className="text-xl font-medium md:text-2xl">Summary</h1>

          <div>
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex items-center justify-between gap-2">
              <span>Order Total</span> <span>3766 ETB</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>Delivery Charge</span> <span>200 ETB</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Delivery Summary</h3>
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-28">
                <Image
                  src="/about/about.png"
                  alt="burger"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold">Burger</h2>
                <p className="text-sm text-gray-500">Expected on 21 May 2025</p>
                <span>3777 ETB</span>
              </div>
            </div>
          </div>

          <div className="bg-border h-[2px] w-full" />

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 font-semibold">
              <span>Total Payable</span>
              <span>3966 ETB</span>
            </div>
            <Button className="w-full cursor-pointer rounded-none bg-green-600 text-white hover:bg-green-700">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
