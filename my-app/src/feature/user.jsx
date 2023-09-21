import { createSlice } from "@reduxjs/toolkit";

export  const userSlice = createSlice({
    name:"user",
    initialState: {value:{slot:""}},
    reducers:{
        setslot:(state, action)=>{
            state.value = action.payload;
        },
        
    }
})




export const { setslot } = userSlice.actions;



export default userSlice.reducer;