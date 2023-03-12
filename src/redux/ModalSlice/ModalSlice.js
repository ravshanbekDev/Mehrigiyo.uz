import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        data: [],
        isModalVisible: false,
        cartItems: [],
    },
    reducers: {
        setModalData(state, action){
            state.data = action.payload;
        },
        setIsModalVisible(state, action){
            state.isModalVisible = action.payload;
        },
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        }
    }
});

export const { setModalData, setIsModalVisible, addToCart} = modalSlice.actions;
export default modalSlice.reducer;
