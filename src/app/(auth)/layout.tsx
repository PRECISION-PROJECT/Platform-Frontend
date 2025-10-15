import MaxWidthContainer from "@/components/containers/max-width-container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-foreground">
      <MaxWidthContainer className="py-10 md:py-20 z-10 mt-20 flex justify-center items-center">
        {children}
      </MaxWidthContainer>
    </div>
  );
}
