type Product = {
  name: string;
  imageUrl: string;
  description?: string;
};

interface CartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string) => void;
}

export const CartContext = React.createContext({});
