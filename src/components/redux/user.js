import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice ({
name:'user',
initialState:{
  name: 'user',
  email:'',
},
reducers:{
  login:(state, action) => {
    state.name = action.payload.name;
  },
},

});

export const {login} = user.actions;
export default user.reducer

  

