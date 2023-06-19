import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS}from "../utils/status";
const initialState = {
    products : [],
    productsStatus  : STATUS.IDLE,  /* başlangıç değerim /*/
    productDetail : [],
    productDetailStatus : STATUS.IDLE
}

export const getProducts = createAsyncThunk ("getproducts", async() => {
    const response = await fetch("https://fakestoreapi.com/products")   
    // const response = await fetch("https://api.escuelajs.co/api/v1/products")   
    const data = await response.json();
    return data;
})

export const getCategoryProducts = createAsyncThunk ("getCategory", async(category) => { // id olarak değişti
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)   
    // const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)   
    const data = await response.json(); 
    return data;
})

export const getDetailProducts = createAsyncThunk ("getDetailproducts", async(id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)   
    // const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)   
    const data = await response.json();
    return data;
})


const productSlice = createSlice ({
    name :"products",
    initialState,
    reducers: {},
    extraReducers : (builder ) => {
        builder
        .addCase(getProducts.pending, (state,action) => {
            state.productsStatus = STATUS.LOADİNG

        })
        // Ürünlerin içini doldurma
        .addCase(getProducts.fulfilled,  (state,action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload 

        })  



        .addCase(getProducts.rejected, (state,action) => {
            state.productsStatus = STATUS.FAIL

        }) 


        .addCase(getDetailProducts.pending, (state,action) => {
            state.productDetailStatus = STATUS.LOADİNG

        })
        // Detayların içini doldurma
        .addCase(getDetailProducts.fulfilled,  (state,action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload 

        })  
        .addCase(getDetailProducts.rejected, (state,action) => {
            state.productDetailStatus = STATUS.FAIL

        })


        .addCase(getCategoryProducts.pending, (state,action) => {
            state.productsStatus = STATUS.LOADİNG

        })
        // Ürünlerin içini doldurma
        .addCase(getCategoryProducts.fulfilled,  (state,action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload 

        })  



        .addCase(getCategoryProducts.rejected, (state,action) => {
            state.productsStatus = STATUS.FAIL

        }) 
    }
})
export default productSlice.reducer