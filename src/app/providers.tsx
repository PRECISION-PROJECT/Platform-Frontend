"use client";

import MainLayout from "@/components/layouts/main-layout";
import { AuthProvider } from "@/components/providers/AuthProvider";
import QueryClientProvider from "@/components/providers/QueryClientProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/utils/const";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
          <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
            <AuthProvider>
              <MainLayout>{children}</MainLayout>
            </AuthProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}

export default Providers;
