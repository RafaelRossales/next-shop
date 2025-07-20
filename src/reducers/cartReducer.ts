import { ACTIONS } from "./actions";

interface CartItem {
  defaultPriceId: string;
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: string;
}

interface CartState {
  items: CartItem[];
}

interface AddItemAction {
  type: typeof ACTIONS.ADD_ITEM;
  payload: CartItem;
}

type CartAction = AddItemAction;

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
