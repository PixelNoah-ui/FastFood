import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FBF8F3] py-10">
      <div className="bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-3xl font-bold text-green-600">
          Order Successful!
        </h1>
        <p className="text-muted-foreground mb-6 text-sm">
          Thank you for your order. Your delicious food is being prepared and
          will be delivered soon.
        </p>
        <div className="text-center">
          <p className="mb-2">
            If you have any questions, feel free to contact us at:
          </p>
          <p className="font-bold">+251911477218</p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button className="rounded-none px-4" asChild>
            <Link href="/">Go to Home</Link>
          </Button>
          <Button className="rounded-none px-4" variant="outline" asChild>
            <Link href="/myorder">View My Order</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
