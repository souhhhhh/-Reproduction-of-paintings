import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import api from './api/api'




export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

