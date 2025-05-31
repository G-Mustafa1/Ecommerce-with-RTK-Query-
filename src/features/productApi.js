import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
    reducerPath: "fakeStoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "products"
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`
        })
    })

})

export const {useGetAllProductQuery, useGetSingleProductQuery} = fakeStoreApi;