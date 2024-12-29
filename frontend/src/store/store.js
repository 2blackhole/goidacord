import { configureStore } from "@reduxjs/toolkit";
import signSlice from "./sign/slice/sign.slice";
import { signApi } from "./sign/api/sign.api";

export const store = configureStore({
  reducer: {
    sign: signSlice.reducer,
    [signApi.reducerPath]: signApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signApi.middleware),
});
