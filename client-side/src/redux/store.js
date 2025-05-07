import { configureStore } from '@reduxjs/toolkit'
import authReducer from './tokenManager/tokens'
import experienceReducer from "./Experience/experienceSlice"

export const store = configureStore({
  reducer: {
    tokens: authReducer,
    experiences: experienceReducer,
  },
})