import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";

import { IAxiosResponse } from "@/types/axios";
import {
  ActivateUserRequestParams,
  DeactivateUserRequestParams,
  GetUserListParams,
  GetUserListResponse,
  GetUserMetricResponse,
} from "./types";
import { KEYS } from "./keys";
import {
  activateUser,
  deactivateUser,
  getUserList,
  getUserMetric,
} from "./requests";

export const useGetUserList = (
  params: GetUserListParams,
  options?: Omit<UseQueryOptions<GetUserListResponse, Error>, "queryKey">
) => {
  return useQuery<GetUserListResponse, Error>({
    queryKey: [KEYS.USER_LIST, params],
    queryFn: ({ signal }) => getUserList(params, signal),
    ...options,
  });
};

export const useGetUserMetric = (
  options: Omit<UseQueryOptions<GetUserMetricResponse, Error>, "queryKey">
) => {
  return useQuery<GetUserMetricResponse, Error>({
    queryKey: [KEYS.USER_METRIC],
    queryFn: ({ signal }) => getUserMetric(signal),
    ...options,
  });
};

export const useDeactivateUserMutate = () => {
  return useMutation<string, IAxiosResponse, DeactivateUserRequestParams>({
    mutationKey: [KEYS.USER_DEACTIVATE],
    mutationFn: (data) => deactivateUser(data),
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation<string, IAxiosResponse, ActivateUserRequestParams>({
    mutationKey: [KEYS.USER_ACTIVATE],
    mutationFn: (data) => activateUser(data),
  });
};
