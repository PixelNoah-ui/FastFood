import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-20 bg-[#fefbf7]">
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden bg-black">
        <h1 className="z-10 mb-2 text-5xl font-extrabold tracking-tight text-white">
          Contact Us
        </h1>
        <p className="z-10 text-sm text-gray-300">
          Home Page &gt; <span className="text-white">contact us</span>
        </p>
        <div className="absolute inset-0">
          <Image
            src="/about/about.png"
            alt="FAQ background"
            fill
            className="object-cover opacity-40"
          />
        </div>
      </div>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-wide text-gray-900 md:text-5xl">
            GET IN TOUCH WITH US
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-justify text-base leading-relaxed text-gray-700">
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email or fill out the contact form and
            we’ll get back to you.
          </p>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="mb-6">
                <MapPin className="relative h-12 w-12 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-gray-900">
                ADDRESS
              </h3>
              <p className="mb-3 leading-relaxed text-gray-700">
                Box 565, Pinney&apos;s Beach, Charlestown,
                <br />
                Nevis, West Indies, Caribbean
              </p>
              <Link
                href="#"
                className="font-semibold tracking-wide text-red-600 uppercase hover:underline"
              >
                Check Location
              </Link>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 space-y-2">
                <Phone className="relative h-12 w-12 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-gray-900">
                GET IN TOUCH
              </h3>
              <p className="text-gray-700">
                Mobile: <span className="font-semibold">0911477218</span>
                <br />
                Hotline: <span className="font-semibold">(+251) 936571967</span>
                <br />
                E-mail:{" "}
                <a
                  href="mailto:hello@Fazfood.com"
                  className="font-medium text-red-600 hover:underline"
                >
                  pixelnoah8@gmail.con
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 space-y-2">
                <Clock className="relative h-12 w-12 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-gray-900">
                HOUR OF OPERATION
              </h3>
              <p className="text-gray-700">
                Monday–Friday: 8am–5pm
                <br />
                Saturday: 9am–Midday
                <br />
                <span className="font-semibold text-green-600">
                  Sunday: Close
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
