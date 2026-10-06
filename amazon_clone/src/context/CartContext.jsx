import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem("cartItems");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id, qty) => {
        if (qty < 1) return;
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty } : item))
        );
    };

    const clearCart = () => setCartItems([]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) =>
            sum + parseFloat(item.price.replace(/[₹$,]/g, "")) * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
