import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], 

    },
    reducer: {                             //Reducer function
        addItem: (state, action)=> {      //Action : It modify the state based on the action 
          // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length= 0; 
        },
    },
});

console.log("Exporting addItem:", cartSlice.actions.addItem); // Add this line

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; 