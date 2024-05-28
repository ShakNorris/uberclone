import {configueStore} from "@reduxjs/toolkit"
import navReducer from "./slices/navSlice"

export const store = configueStore({
    reducer:{
        nav: navReducer,
    }
})