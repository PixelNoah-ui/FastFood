import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-8 py-10">
      <div className="flex w-full justify-center">
        <div className="relative hidden aspect-[16/12] w-full basis-1/4 md:block">
          <Image src="/subscribe/sub2.png" alt="image1" fill />
        </div>
        <div className="flex basis-2/4 flex-col items-center justify-center space-y-8">
          <div className="space-y-4 text-center">
            {" "}
            <h1 className="text-3xl font-medium uppercase md:text-4xl lg:text-5xl">
              Join For Hot Offers
            </h1>
            <p className="text-muted-foreground text-sm">
              If we go all out… We do it well! Subscribe to the newsletter to
              get the most exclusive promos.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-[250px] placeholder:text-sm"
            />
            <Button className="flex items-center gap-2 px-7">
              Subscribe <MoveRightIcon />
            </Button>
          </div>
        </div>
        <div className="relative hidden aspect-[16/12] w-full basis-1/4 md:block">
          <Image src="/subscribe/sub1.png" alt="image1" fill />
        </div>
      </div>
    </div>
  );
}
