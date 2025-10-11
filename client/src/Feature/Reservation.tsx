"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, PhoneCall, UtensilsCrossed } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function Reservation() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");

  return (
    <div
      className="relative w-full bg-cover"
      style={{
        backgroundImage: "url('/bestDishes/bg.png')",
        backgroundPosition: "center",
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
            Make online reservations, read restaurant reviews from diners, and
            earn points towards free meals. OpenTable is a real-time online
            reservation system.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a7a3f]">
              <PhoneCall />
            </div>
            <div className="space-y-2">
              <h1 className="text-background text-xl font-bold">
                Quick order 24/7
              </h1>
              <p className="text-xl font-bold">+251911477218</p>
            </div>
          </div>
        </div>

        <div className="w-full basis-2/4 space-y-5 bg-[#0a7a3f]">
          <div className="flex flex-col items-center justify-center space-y-8 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg">
            <div className="space-y-4">
              <div className="flex flex-col items-center text-white">
                <UtensilsCrossed size={44} />
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Reservation
                </h1>
              </div>
              <p className="font-bold text-white">Book Your Table</p>
            </div>

            <div className="flex flex-wrap space-y-4">
              <div className="flex w-full flex-wrap items-center justify-center gap-5">
                <Select defaultValue="1">
                  <SelectTrigger className="w-[180px] text-white">
                    <SelectValue placeholder="Select People" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1 people</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4+ people</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-48 justify-between bg-transparent font-normal text-white hover:bg-transparent"
                    >
                      {date ? format(date, "PPP") : "Select date"}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto rounded-xl p-0 shadow-lg"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        setOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex w-full justify-center">
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="flex w-[180px]">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                      <SelectItem value="12:30 PM">12:30 PM</SelectItem>
                      <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                      <SelectItem value="1:30 PM">1:30 PM</SelectItem>
                      <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                      <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                      <SelectItem value="6:30 PM">6:30 PM</SelectItem>
                      <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                      <SelectItem value="7:30 PM">7:30 PM</SelectItem>
                      <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="group">
              <Button className="relative overflow-hidden rounded-none px-8 text-white transition-all duration-300">
                <span className="relative z-10">Book</span>
                <span className="from-primary to-destructive absolute inset-0 translate-x-[-100%] bg-gradient-to-r transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
