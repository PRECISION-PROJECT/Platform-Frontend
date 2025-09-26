import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { CreateProductRequest, DeleteProductRequest, GetProductListParams, IProduct, UpdateProductRequest } from "./types";
import { GetProductListResponse } from "./types";
import { KEYS } from "./keys";
import { createProduct, deleteProduct, getProductByCategory, getProductDetail, getProductFeatureList, getProductList, updateProduct } from "./requests";
import { IAxiosResponse } from "@/types/axios";

export const useGetProductList = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCTS_LIST],
    queryFn: ({ signal }) => getProductList(params, signal),
    ...options,
  });
};

export const useGetProductFeatureList = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_FEATURE_LIST],
    queryFn: ({ signal }) => getProductFeatureList(params, signal),
    ...options,
  });
};

export const useGetProductByCategory = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_BY_CATEGORY],
    queryFn: ({ signal }) => getProductByCategory(params, signal),
    ...options,
  });
};

export const useGetProductDetail = (
  id: string,
  options?: Omit<UseQueryOptions<IProduct, Error>, "queryKey">
) => {
  return useQuery<IProduct, Error>({
    queryKey: [KEYS.PRODUCTS_DETAIL, id],
    queryFn: ({ signal }) => getProductDetail(id, signal),
        ...options,
  });
};

export const useCreateProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, CreateProductRequest>({
    mutationKey: [KEYS.PRODUCTS_LIST],
    mutationFn: (data) => createProduct(data),
  });
};

export const useUpdateProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, UpdateProductRequest>({
    mutationKey: [KEYS.PRODUCTS_DETAIL],
    mutationFn: (data) => updateProduct(data),
  });
};

export const useDeleteProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, DeleteProductRequest>({
    mutationKey: [KEYS.PRODUCTS_DETAIL],
    mutationFn: (data) => deleteProduct(data),
  });
};