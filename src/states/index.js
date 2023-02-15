import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import addressReducer from "./address/reducers";
import banksReducer from "./banks/reducers";
import applianceReducer from "./appliance/reducers";
import beersReducer from "./beers/reducers";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    address: addressReducer,
    banks: banksReducer,
    appliance: applianceReducer,
    beers: beersReducer,
  },
});

export default store;
