import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookMetadata {
    isbn: number;
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
            !state.find((book) => book.isbn === actions.payload.isbn) && 
                state.push(actions.payload)
        },

        removeMetadata(state, actions: PayloadAction<number>) {
            const indexToRemove = state.findIndex((book) => book.isbn === actions.payload);

            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        },

        incrementQuantity(state, actions: PayloadAction<number>) {
            const bookToIncrement = state.find(book => book.isbn === actions.payload);
            
            if (bookToIncrement) {
                bookToIncrement.quantity += 1;
            }
        },
        decrementQuantity(state, actions: PayloadAction<number>) {
            const bookToIncrement = state.find(book => book.isbn === actions.payload);
            
            if (bookToIncrement && bookToIncrement.quantity > 0) {
                bookToIncrement.quantity -= 1;
            }
        }
    }
});
export const { addMetadata, removeMetadata, incrementQuantity, decrementQuantity } = bookSlice.actions;
export default bookSlice.reducer;