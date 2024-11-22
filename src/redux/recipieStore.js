import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from '../slice/recipieSlice'

const recipeStore=configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})

export default recipeStore;

