import {configureStore} from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import productSlice from "./productSlice";
import cardSlice from "./cardSlice";
/*
import SearchSlice from "./SearchSlice";
*/
export const store = configureStore({
    reducer: {
        categories : CategorySlice,
        products : productSlice,
        carts: cardSlice,
        // search : SearchSlice
    },
})
