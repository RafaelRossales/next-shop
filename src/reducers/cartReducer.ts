import { IProduct } from "@/types";
import { ACTIONS } from "./actions";

export interface CartState {
  items: IProduct[];
  quantity: number;
  total: number;
}

interface AddItemAction {
  type: typeof ACTIONS.ADD_ITEM;
  payload: IProduct;
}

export type CartAction = AddItemAction;

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        quantity: state.items.length + 1,
      };
    default:
      return state;
  }
};
