import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "header",
  initialState: {
    completed:[],
    // localStorage.getItem('itemsInvoice')?JSON.parse(localStorage.getItem('itemsInvoice')):[],
   workout:0,
    calories:0,
    minutes:0,
  },

  reducers: {

    handleChange:(state,action)=>{
return {...state,[action.payload.name]:action.payload.value};

    }
  },
});

export const { handleChange } = workoutSlice.actions;

export default workoutSlice.reducer;