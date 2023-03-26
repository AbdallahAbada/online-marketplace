import { createContext, useContext, useState } from "react";


const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);


    const value = { items, setItems };

    return (
        <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);
