import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { rentalReducer } from "./rentalSlice";
import { loadingReducer } from "./loadingSlice";
import { loginReducer } from "./loginSlice";
import { filterReducer } from "./filterSlice";
import { userReducer } from "./userSlice";
import { customerReducer } from "./customerSlice";
import { invoiceReducer } from "./invoiceSlice";
import { bookingReducer } from "./bookingSlice";
import { referringPageReducer } from "./referringPageSlice";
import { stepsReducer } from "./stepsSlice";


const rootReducer = combineReducers({
  cart: cartReducer,
  rental: rentalReducer,
  loading: loadingReducer,
  login: loginReducer,
  filter: filterReducer,
  user: userReducer,
  customer: customerReducer,
  invoice: invoiceReducer,
  booking: bookingReducer,
  referringPage : referringPageReducer,
  steps: stepsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
