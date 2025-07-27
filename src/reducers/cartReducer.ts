import { IProduct } from "@/types";
import { ACTIONS } from "./actions";
import { addPrice, parsePriceToCents } from "@/utils";

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
      const priceInCents = parsePriceToCents(action.payload.price);

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity! += 1;

        return {
          ...state,
          items: updatedItems,
          total: addPrice(state.total, priceInCents),
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
        total: addPrice(state.total, priceInCents),
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

      const totalInCents = updatedItems.reduce((acc, item) => {
        const itemPriceInCents = parsePriceToCents(item.price);
        return acc + itemPriceInCents * (item.quantity || 1);
      }, 0);

      return {
        ...state,
        items: updatedItems,
        quantity: updatedItems.reduce(
          (acc, item) => acc + (item.quantity || 1),
          0
        ),
        total: totalInCents / 100,
      };
    }

    case ACTIONS.INCREMENT_ITEM:
      const incrementPriceInCents = parsePriceToCents(action.payload.price);
      const incrementedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
      return {
        ...state,
        items: incrementedItems,
        total: addPrice(state.total, incrementPriceInCents),
      };

    default:
      return state;
  }
};
