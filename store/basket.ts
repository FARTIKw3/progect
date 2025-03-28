import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BasketItem {
  id: number;
  name: string;
  price: number;
  url: string;
  image: string;
}
type State = {
  cart: BasketItem[];
};

type Actions = {
  addToCart: (good: BasketItem) => void;
  removeFromCart: (id: number) => void;
};

export const useBasket = create<State & Actions>()(
  devtools(
    immer((set) => ({
      cart: [],
      addToCart: (good) =>
        set((state) => {
          state.cart.push(good);
        }),
      removeFromCart: (id) =>
        set((state) => {
          const index = state.cart.findIndex((item) => item.id === id);
          if (index !== -1) {
            state.cart.splice(index, 1);
          }
        }),
    }))
  )
);
