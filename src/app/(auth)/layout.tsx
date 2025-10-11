import { ThemeToggle } from "@/components/shared/theme-toggle";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center p-4 auth-background">
      {children}
    </div>
  );
}
