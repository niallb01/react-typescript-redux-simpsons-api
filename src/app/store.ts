import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "../features/counter/characterSlice"
//store makes data available to components

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
