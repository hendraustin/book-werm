import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BookMetadata = {
    author: string;
    title: string;
    quantity: number;
};

const initialState: BookMetadata[] = [];

const bookSlice = createSlice({
    name: 'bookCounter',
    initialState,
    reducers: {
        addMetadata(state, actions: PayloadAction<BookMetadata>) {
            !state.find((book) => book.title === actions.payload.title) && 
                state.push(actions.payload)
        },

        removeMetadata(state, actions: PayloadAction<String>) {
            const indexToRemove = state.findIndex((book) => book.title === actions.payload);

            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        },

        incrementQuantity(state, actions: PayloadAction<String>) {
            const bookToIncrement = state.find(book => book.title === actions.payload);
            
            if (bookToIncrement) {
                bookToIncrement.quantity += 1;
            }
        },
        decrementQuantity(state, actions: PayloadAction<String>) {
            const bookToIncrement = state.find(book => book.title === actions.payload);
            
            if (bookToIncrement && bookToIncrement.quantity > 0) {
                bookToIncrement.quantity -= 1;
            }
        }
    }
});
export const { addMetadata, removeMetadata, incrementQuantity, decrementQuantity } = bookSlice.actions;
export default bookSlice.reducer;