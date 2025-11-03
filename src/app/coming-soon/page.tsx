"use client";

import CountdownTimer from "@/components/shared/count-down-timer";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 29);
  return (
    <VStack
      justify="center"
      align="center"
      spacing={0}
      className="relative w-full min-h-screen p-0 overflow-hidden text-foreground"
    >
      <div className="w-full max-w-xl text-center">
        <h1 className="mb-3 font-bold text-muted text-title-md text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl">
          Coming Soon
        </h1>

        <p className="text-base text-gray-500 mb-9">
          Our website is currently under construction, enter your email id to
          get latest updates and notifications about the website.
        </p>

        {/* <!-- ===== Countdown Timer Start ===== --> */}
        <CountdownTimer targetDate={targetDate} />
        {/* <!-- ===== Countdown Timer End ===== --> */}

        <div className="mt-8 flex justify-center gap-2">
          <Button
            onClick={() => router.push(ROUTES.HOME)}
            variant="default"
            size="lg"
          >
            Go back to home
          </Button>
        </div>
      </div>
    </VStack>
  );
}
