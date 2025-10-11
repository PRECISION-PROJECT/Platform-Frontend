"use client";

import { useConfirmEmailMutation } from "@/apis/auths";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  email: string
  hash: string
}

export const useEmailConfirm = ({email, hash}: Props) => {
  const useEmailConfirmMutate = useConfirmEmailMutation();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        await useEmailConfirmMutate.mutateAsync({ hash });
        toast.success("Your email has been confirmed successfully. Please sign in to continue.");
        setTimeout(() => {
          router.push(ROUTES.SIGN_IN);
        }, 500);
      } catch (error) {
      handleToastError(error);
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 500);
      }
    })()
  }, [hash])
  
  return {
    isLoading: useEmailConfirmMutate.isPending,
  };
};
