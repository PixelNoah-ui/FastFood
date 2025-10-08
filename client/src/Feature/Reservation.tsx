import { PhoneCall } from "lucide-react";

export default function Reservation() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/bestDishes/bg.png')",
        backgroundPosition: "Center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-8 py-10 pt-20 md:flex-row lg:gap-8">
        <div className="text-background basis-2/4 space-y-12">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Do you have any dinner plan today? Reserve your table
          </h1>
          <p>
            Make online reservations, read restaurant reviews from dinners, and
            earn points towards free meals. OpenTable is a real time online
            reservation.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a7a3f]">
              <PhoneCall />
            </div>
            <div className="space-y-2">
              <h1 className="text-background text-xl font-bold">
                Quick order 24/7
              </h1>
              <p className="text-destructive text-xl font-bold">
                +251911477218
              </p>
            </div>
          </div>
        </div>
        <div className="basis-2/4"></div>
      </div>
    </div>
  );
}
