import { IProduct } from "@/types";
import { ACTIONS } from "./actions";

export interface CartState {
  items: IProduct[];
  quantity: number;
  total: number;
}

interface AddItemAction {
  type:
    | typeof ACTIONS.ADD_ITEM
    | typeof ACTIONS.REMOVE_ITEM
    | typeof ACTIONS.INCREMENT_ITEM;
  payload: IProduct;
}

export type CartAction = AddItemAction;

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity! += 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total + parseFloat(action.payload.price),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
        quantity: state.items.length + 1,
        total: state.total + parseFloat(action.payload.price),
      };
    case ACTIONS.REMOVE_ITEM: {
      const updatedItems = state.items
        .map((item) => {
          if (item.id === action.payload.id) {
            const newQuantity = (item.quantity || 1) - 1;
            if (newQuantity > 0) {
              return { ...item, quantity: newQuantity };
            }
            return null;
          }
          return item;
        })
        .filter((item): item is IProduct => item !== null);

      return {
        ...state,
        items: updatedItems,
        quantity: updatedItems.reduce(
          (acc, item) => acc + (item.quantity || 1),
          0
        ),
        total: updatedItems.reduce(
          (acc, item) => acc + parseFloat(item.price) * (item.quantity || 1),
          0
        ),
      };
    }
    case ACTIONS.INCREMENT_ITEM:
      const incrementedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
      return {
        ...state,
        items: incrementedItems,
        total: state.total + parseFloat(action.payload.price),
      };

    default:
      return state;
  }
};
