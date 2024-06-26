import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        custName: '',
        contactNo: '',
        email: '',
        password: '',
    },

    reducers: {
        addEmail: (state,action) => {
            state.email =  action.payload;
        }
    }
})

export const { addEmail } = userSlice.actions;

export default userSlice.reducer;