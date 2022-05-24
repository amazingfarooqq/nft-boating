import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    route: null,
  },
});

export default store;
