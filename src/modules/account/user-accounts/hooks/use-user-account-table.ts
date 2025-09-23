"use client";

import { useGetUserList } from "@/apis/users";
import { PAGE_KEY, PER_PAGE_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";

import { parseAsInteger, parseAsString } from "nuqs/server";

export const useUserAccountTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    firstName: parseAsString.withDefault(""),
    status: parseAsString.withDefault(""),
  });
  const { data, isLoading } = useGetUserList({
    page: query.page,
    pageSize: query.pageSize,
    search: query.firstName,
    status: query.status,
  });

  const userList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    userList,
    pageCount,
    isLoading,
  };
};
