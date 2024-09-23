import { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export const useAuthCheck = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Encode the current path to handle special characters
      const returnUrl = encodeURIComponent(pathname);
      router.push(`/auth/sign-in?returnUrl=${returnUrl}`);
    }
  }, [status, router, pathname]);

  return { session, status, isLoading: status === "loading" };
};