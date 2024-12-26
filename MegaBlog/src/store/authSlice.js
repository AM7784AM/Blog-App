import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status : false,
    userData : null    
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;    //exports the actions that we do in the authSlice
export default authSlice.reducer