import { createSlice } from "@reduxjs/toolkit";

export  const userSlice = createSlice({
    name:"username",
    initialState: {value:{slot:""}},
    reducers:{
        setname:(state, action)=>{
            state.value = action.payload;
        }
    }
})



export const { setname } = userSlice.actions;

export default userSlice.reducer;