import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        // action are created in tis reducers key as objects
        // logics to update state

        // function to increment number
        // to give an argument to a action or method action ketword is used
        increment:(state,action)=>{
            state.value+=action.payload
        },
        // function to decrement number
        decrement:(state,action)=>{
            state.value-=action.payload

        },
        // function to reset
        reset:(state)=>{
            state.value=0

        }

    }
})

// action is require by components in order to update state
export const{increment,decrement,reset}=counterSlice.actions

// reducer is reqiured to store to change the state value

export default counterSlice.reducer