import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});


function cartReducer(state, action ) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1 
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return { ...state, items: updatedItems };
    }


        if (action.type === 'REMOVE_ITEM') {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id // Note: here we use action.id instead of action.item.id
            );
        
            // If the item is found in the cart (index >= 0)
            if (existingCartItemIndex >= 0) {
                const updatedItems = [...state.items]; // Create a copy of the current items
        
                // Option 1: Using splice to remove the item
                updatedItems.splice(existingCartItemIndex, 1);
        
                return { ...state, items: updatedItems }; // Return the new state with the item removed
            }
        
            // If no item was found (index === -1), just return the current state
            return state;
        }
        
    }

    return state;



export function CartContextProvider ({children}) {

    useReducer();

    return <CartContextProvider>{children}</CartContextProvider>
}

export default CartContext;
