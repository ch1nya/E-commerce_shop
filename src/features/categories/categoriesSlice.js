import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const getCategories = createAsyncThunk(
    'categories/getCategories', 
    async (_,thunkAPI) => {
        try {
        const result = await axios(`${BASE_URL}/categories`)
        // const result = await axios('https://api.escuelajs.co/api/v1/categories') // that's how the link should look like
        return result.data
        } 
        catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)
        }
    }
); 


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { list:[],
    isLoading: false,
    },
    extraReducers:(builder) => {
            builder.addCase(getCategories.fulfilled,(state, {payload} ) => {
                state.list = payload ;
                state.isLoading = false; 
            });
            builder.addCase(getCategories.pending,(state) => {
                state.isLoading = true
            });
            builder.addCase(getCategories.rejected,(state) => {
                state.isLoading = false
                console.log('The page is not accessible')
            })
        },
    }
)

export default categoriesSlice.reducer;