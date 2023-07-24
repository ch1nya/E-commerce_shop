import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const getProducts = createAsyncThunk(
    'getProducts/getProducts', 
    async (_,thunkAPI) => {
        try {
        // const result = await axios(`${BASE_URL}/products`)
        const result = await axios('https://api.escuelajs.co/api/v1/products'
        )
        
        return result.data
        } 
        catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)
        }
    }
); 


const productsSlice = createSlice({
    name: 'products',
    initialState: { 
        list:[],
        // filtered: [],
        // related: [],
        isLoading: false,
        
    },
    reducers: {
        filterByPrice: (state, {payload}) =>{
            state.filtered = state.list.filter(({price})=> price < payload)
        }
    },
    extraReducers:(builder) => {
            builder.addCase(getProducts.fulfilled,(state, {payload} ) => {
                state.list = payload ;
                state.isLoading = false; 
            });
            builder.addCase(getProducts.pending,(state) => {
                state.isLoading = true
            });
            builder.addCase(getProducts.rejected,(state) => {
                state.isLoading = false
                console.log('The page is not accessible')
            })
        },
    }
)

export default productsSlice.reducer;
export const {filterByPrice} = productsSlice.actions;