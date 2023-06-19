import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS}from "../utils/status";
import { getProducts } from "./productSlice";

const initialState = {
 products : [],
 productsStatus : STATUS.IDLE, /* başlangıç değerim /*/
 productDetail : [],
 productDetailStatus : STATUS.IDLE
}

export const getSearchProducts = createAsyncThunk("searchProducts", async (keyword) => {
    const response = await fetch(`https://fakestoreapi.com/products?title=${keyword}`);
    const data = await response.json();
    return data;
  });




const SearchSlice = createSlice ({
 name :"search",
 initialState,
 reducers: {},
 extraReducers : (builder ) => {
 builder
 .addCase(getSearchProducts.pending, (state,action) => {
 state.productsStatus = STATUS.LOADİNG
 })
 .addCase(getSearchProducts.fulfilled, (state,action) => {
 state.productsStatus = STATUS.SUCCESS;
 state.products = state.products.filter(product => product.title === action.meta.arg) 

 }) 
 .addCase(getSearchProducts.rejected, (state,action) => {
 state.productsStatus = STATUS.FAIL

 }) 

 }
})
export default SearchSlice.reducer