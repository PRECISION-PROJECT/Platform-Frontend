import { EmailConfirmModule } from "@/modules/auth";
import { ROUTES } from "@/utils/routes";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Email Confirm Page",
  description: "This is Email Confirm Page",
};

export default async function EmailConfirm({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const email = params.email;
  const hash = params.hash;

  // Server-side check: redirect to home if no email
  if (
    !email ||
    typeof email !== "string" ||
    !hash ||
    typeof hash !== "string"
  ) {
    redirect(ROUTES.SIGN_IN);
  }

  return <EmailConfirmModule email={email} hash={hash} />;
}
