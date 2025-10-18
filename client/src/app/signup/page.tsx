import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function SignupPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FBF8F3] py-10">
      <div className="bg-chart-2 w-full max-w-md rounded-none p-8 shadow-md">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Sign up to Your Account
        </h2>
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <form className="space-y-4">
            <div>
              <Button
                asChild
                className="flex w-full items-center justify-center gap-2 border border-gray-300 bg-white text-black hover:bg-gray-50"
              >
                <div>
                  <Image
                    src="/google.png"
                    alt="Google Icon"
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  <span>Sign up with Google</span>
                </div>
              </Button>
            </div>
            <div className="my-4 text-center text-white">or</div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full text-white placeholder:text-white"
              />
            </div>
            <Button type="submit" className="w-full rounded-none px-4">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
