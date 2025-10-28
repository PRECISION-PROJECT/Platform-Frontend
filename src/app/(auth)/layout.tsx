import MaxWidthContainer from "@/components/containers/max-width-container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper">
      <MaxWidthContainer className="py-10 md:py-28 z-10 mt-28 flex justify-center items-center">
        {children}
      </MaxWidthContainer>
    </div>
  );
}
