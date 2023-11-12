import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '@/utils/axiosInstance'
export const fetchTeachers= createAsyncThunk("teachers/fetch", async () => {
    return await axiosInstance
    .get("https://dummyjson.com/users")
    .then((res) =>res.data.users)
});

const teacherreducer=createSlice({
    name: "teachers",
    initialState:{
        data:[],
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTeachers.fulfilled,(state,action)=>{
            state.data=action.payload;
        })
    }
})
export default teacherreducer.reducer;