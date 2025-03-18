import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,

      addToCart: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          const updatedItems = currentItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          set((state) => ({
            items: updatedItems,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          set((state) => ({
            items: [...state.items, { product, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      removeFromCart: (productId: number) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find(
          (item) => item.product.id === productId
        );

        if (!itemToRemove) return;

        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
          totalItems: state.totalItems - itemToRemove.quantity,
          totalPrice:
            state.totalPrice -
            itemToRemove.product.price * itemToRemove.quantity,
        }));
      },

      updateQuantity: (productId: number, quantity: number) => {
        const currentItems = get().items;
        const itemToUpdate = currentItems.find(
          (item) => item.product.id === productId
        );

        if (!itemToUpdate) return;

        const quantityDifference = quantity - itemToUpdate.quantity;

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
          totalItems: state.totalItems + quantityDifference,
          totalPrice:
            state.totalPrice + itemToUpdate.product.price * quantityDifference,
        }));
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
