import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        try {
            const saved = localStorage.getItem("orders");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const placeOrder = (cartItems, summary) => {
        const order = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            items: cartItems,
            ...summary,
        };
        setOrders((prev) => [order, ...prev]);
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => useContext(OrderContext);
