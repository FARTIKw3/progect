import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface cartData {
  name: string;
  documentId: string;
  image: {
    url: string;
  }[];
}

type State = {
  selectedRoom: Record<string, cartData>;
};
type Actions = {
  addRoom: (data: cartData) => void;
  removeRoom: (documentId: string) => void;
};

export const useSelectedRoom = create<State & Actions>()(
  devtools(
    immer((set) => ({
      selectedRoom: {},
      addRoom: (data) =>
        set((state) => {
          state.selectedRoom[data.documentId] = data;
        }),
      removeRoom: (documentId) =>
        set((state) => {
          delete state.selectedRoom[documentId];
        }),
    }))
  )
);
