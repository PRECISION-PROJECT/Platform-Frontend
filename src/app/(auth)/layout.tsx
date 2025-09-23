import { ThemeToggle } from "@/components/shared/theme-toggle";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden bg-black lg:block">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="absolute inset-0 flex flex-col">
            <header className="relative z-20 p-10">
              <div className="flex items-center text-lg font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                Precision Admin
              </div>
            </header>

            <div className="relative z-20 flex flex-1 items-center justify-center p-10">
              <Image
                src="/next.svg"
                className="h-auto w-[400px]"
                width={400}
                height={400}
                alt="Next.js"
                priority
              />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-8">
          {children}
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <ThemeToggle />
      </div>
    </div>
  );
}
