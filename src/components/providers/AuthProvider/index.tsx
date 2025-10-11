"use client";
import { IUserResponse, useGetMe, useLogoutMutation } from "@/apis/auths";
import { ECookie } from "@/apis/http-instance";
import { handleToastError } from "@/utils/common";
import { deleteCookieData, getCookieData } from "@/utils/cookie";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { queryClient } from "../QueryClientProvider";

interface AuthContextType {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  isLogoutLoading: boolean;
  userData: IUserResponse | undefined;
  onLogout: () => Promise<void>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetMe({
    enabled: !!isAuthenticated,
  });

  const useLogoutMutate = useLogoutMutation();

  const onLogout = async () => {
    const refreshToken = getCookieData(ECookie.REFRESH_TOKEN);
    if (!refreshToken || useLogoutMutate.isPending) return;
    try {
      await useLogoutMutate.mutateAsync({
        refreshToken,
      });
      deleteCookieData(ECookie.ACCESS_TOKEN);
      deleteCookieData(ECookie.REFRESH_TOKEN);
      setIsAuthenticated(false);
      refetch();
      queryClient.cancelQueries({});
      router.push(ROUTES.HOME);
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      const token = getCookieData(ECookie.ACCESS_TOKEN);
      setIsAuthenticated(!!token);
    };

    checkAuthenticationStatus();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isAuthenticating: isLoading,
      isLogoutLoading: useLogoutMutate.isPending,
      userData: data,
      onLogout,
      setIsAuthenticated,
    }),
    [isAuthenticated, isLoading, useLogoutMutate.isPending, data, onLogout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
