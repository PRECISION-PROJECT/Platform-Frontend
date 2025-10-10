"use client";

import QueryClientProvider from "@/components/providers/QueryClientProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/utils/const";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider>
      <NuqsAdapter>
        <ThemeProvider>
          <Toaster richColors />
          <ProgressBar
            height="4px"
            color="#a12d23"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
            {children}
          </GoogleOAuthProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}

export default Providers;
