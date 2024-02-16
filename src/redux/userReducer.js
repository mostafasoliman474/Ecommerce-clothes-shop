import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
      name:"user",
      initialState:{
        currentUser:null,
        isFetching:false,
        error:false
      },
      reducers:{
        connectionStart:(state)=>{
            state.isFetching=true
        },
        connectionSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.isFetching=false
        },
        connectionFailure:(state)=>{
            state.isFetching=false
            state.error=true
        },
        logout:(state)=>{
          state.currentUser=null
        }
      }
})

export const {connectionStart,connectionSuccess,connectionFailure,logout}=userSlice.actions;
export default userSlice.reducer;