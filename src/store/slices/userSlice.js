import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// const { error } = require("console");


const userSlice = createSlice({
    name:"user",
    initialState:{
        loading: false,
        isAuthenticated: false,
        user:{},
        leaderboard:[],
        
    },
    reducers:{
        registerRequest(state,action){
            state.loading=true;
            state.isAuthenticated=false;
            state.user={}
        },
        registerSuccess(state,action){
            state.loading=false;
            state.isAuthenticated=true;;
            state.user=action.payload.user;
        },
        registerFailed(state,action){
            state.loading=false;
            state.isAuthenticated=false;
            state.user={}
        },
        


        logoutSuccess(state,action){
            state.isAuthenticated = false;
            state.user={};
            
        },
        logoutFailed(state, action){
            state.loading = false;
            state.isAuthenticated = state.isAuthenticated;
            state.user=state.user;

        },
        clearAllErrors(state,action){
            state.user=state.user;
            state.isAuthenticated = state.isAuthenticated;
            state.leaderboard=state.leaderboard;
            state.loading = false;
        }
    }
})

export const { registerRequest,registerSuccess,registerFailed,logoutSuccess, logoutFailed,clearAllErrors } = userSlice.actions
export default userSlice.reducer;