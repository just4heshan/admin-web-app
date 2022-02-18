import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    fullName: 'Full Name',
    email: 'Email',
    address: 'Home Address',
    phoneNumber: 'Phone Number',
    jobTitle: 'Job Title'

}

const formSlice = createSlice({
    name: 'customerForm',
    INITIAL_STATE,
    reducers: {
        fNameState(state){
            state.fullName
        },
        email(state){
            state.email
        },
        address(state){
            state.address
        },
        phoneNumber(state){
            state.phoneNumber
        },
        jobTitle(state){
            state.jobTitle
        },
    }
});

export const customerFormActions = formSlice.actions;

export default formSlice.reducer;
