"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <VStack
        justify="center"
        align="center"
        spacing={0}
        className="relative w-full min-h-screen p-0 overflow-hidden text-foreground"
      >
        <div className="w-full max-w-xl text-center">
          <span className="from-foreground bg-linear-to-b to-transparent bg-clip-text text-[10rem] leading-none font-extrabold text-transparent">
            404
          </span>
          <h1 className="mb-3 font-bold text-muted text-title-md text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl">
            Something&apos;s missing
          </h1>
          <p className="text-base text-gray-500 mb-9">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Button onClick={() => router.back()} variant="default" size="lg">
              Go back
            </Button>
          </div>
        </div>
      </VStack>
    </>
  );
}
