import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:3001/'

const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Pictures'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),

    endpoints: (builder) => ({ 
        getPicture: builder.query({ 
            query: () => 'pictures'
        }),

        getPictureCountry: builder.query({ 
            query: (country) => `pictures?country=${country}`
        }),

        
    })
    

})


export  const { useGetPictureQuery, useGetPictureCountryQuery } = api

export default api