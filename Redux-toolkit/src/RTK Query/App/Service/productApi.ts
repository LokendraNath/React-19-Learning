import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductIDse: builder.query({
      query: (id) => `/product/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/product/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductIDseQuery,
  useAddNewProductMutation,
} = productApi;
