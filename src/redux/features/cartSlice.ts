import { TCartItem } from "@/types/cart.types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

let cartItemsFromStorage;

if (typeof window !== "undefined") {
  cartItemsFromStorage = localStorage.getItem("cartItems");
}
const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const initialState = {
  cartItems: cartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const toastId = "addToCart";

      const existingItemIndex = state.cartItems.findIndex(
        (item: TCartItem) => item._id === action.payload._id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex] = {
          ...state.cartItems[existingItemIndex],
          qty: state.cartItems[existingItemIndex].qty + 1,
        };
        toast.info("Increased product quantity", { id: toastId });
      } else {
        let newCartItem = { ...action.payload };
        state.cartItems.push(newCartItem);
        toast.success("Product added to cart", { id: toastId });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
