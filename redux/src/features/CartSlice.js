import { createSlice    } from  "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        items:[],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItem: (state , action) => {
            state.items.push(action.payload);
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        }
    }
});
export const {addItem } =CartSlice.actions;
export default CartSlice.reducer;