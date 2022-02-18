import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reset } from "redux-form";
import { contactApi } from "../../api";

// initial contact redux state data struct
const initialState = {
    details: null,
    collections: null,
    status: "idle",
    error: null,
    success: null,
};

// Helper function that will return the error props as payload
const errorPayload = (err, thunkAPI, message = null) => {
    if (message) {
        return thunkAPI.rejectWithValue(message);
    }
    if (err.response)
        return thunkAPI.rejectWithValue(err.response.data.message);

    return thunkAPI.rejectWithValue(err.message);
};

// helper call back function that will handle any reducer state mutation
// for rejected async thunk
const rejectionReducer = (state, action) => {
    state.success = null;
    state.error = {
        severity: "error",
        message: action.payload,
        open: true,
    };
    state.status = "error";
};

// helper function that will mutate alert state in contact reducer
// for any successful process/requests
const successAlertFunction = (state, action) => {
    if (state.error) state.error = null;
    state.success = {
        severity: "success",
        message: action.payload.message,
        open: true,
    };
    state.status = "success";
};

// Async thunk that will compute GET request to get list of contacts
export const getContactList = createAsyncThunk(
    "contact/getContactList",
    async (thunkAPI) => {
        try {
            const res = await contactApi.get(
                "/getAllUploadedEmails/listId/480"
            );
            const contacts = res.data;

            contacts.reverse();
            return {
                data: contacts,
                message: "SUCCESS: Successfully fetched contacts",
            };
        } catch (err) {
            return errorPayload(
                err,
                thunkAPI,
                "ERROR: Unable to retrieve contacts"
            );
        }
    }
);

// Async thunk that will compute POST request to add new contact to the list
export const addNewContact = createAsyncThunk(
    "contact/addNewContact",
    async (formValues, thunkAPI) => {
        thunkAPI.dispatch(reset("contactForm"));
        try {
            await contactApi.post("/emailUpload", [
                {
                    ...formValues,
                    listId: 480,
                },
            ]);
            const res = await contactApi.get(
                "/getAllUploadedEmails/listId/480"
            );
            return {
                data: res.data[res.data.length - 1],
                message: "SUCCESS: Successfully add new contact",
            };
        } catch (err) {
            return errorPayload(err, thunkAPI, "ERROR: Unable to add contact");
        }
    }
);

// Async thunk that will compute PUT request to update a detail of a contact
// Example of formValues accepted by the async thunk:
// const formValues = {
//     id: 2132975,
//     email: "charles.brymer592@test.email.com",
//     name: "Charles Brymer",
//     phoneNumber: "0123 456 766",
//     address: "New address",
//     jobTitle: "Software Engineer",
//     listId: 480,
// };
export const updateContactDetails = createAsyncThunk(
    "contact/updateContactDetails",
    async (formValues, thunkAPI) => {
        try {
            await contactApi.put("/updateEmail", formValues);
            return {
                data: formValues,
                message: `SUCCESS: Successfully update contact with ID:${formValues.id}`,
            };
        } catch (err) {
            return errorPayload(
                err,
                thunkAPI,
                `ERROR: Unable to update contact with ID: ${formValues.id}`
            );
        }
    }
);

// Async thunk that will perform DELETE request to delete multiple selected contacts
export const deleteContacts = createAsyncThunk(
    "contact/deleteContacts",
    async (contactIds, thunkAPI) => {
        try {
            await contactApi.delete("/deleteEmails", {
                data: contactIds, // list of contact ids [2134060, 2132975, ...]
            });
            return {
                data: contactIds,
                message: `SUCCESS: Successfully deleted ${contactIds.length} contacts`,
            };
        } catch (err) {
            return errorPayload(
                err,
                thunkAPI,
                `ERROR: Unable to delete ${contactIds.length} contacts`
            );
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        cleanContact: (state) => {
            state = initialState;
        },
        setContactDetails: (state, action) => {
            state.details = action.payload;
        },
        cleanContactDetails: (state) => {
            state.details = null;
        },
        cleanAlerts: (state) => {
            state.error = null;
            state.success = null;
        },
    },
    extraReducers: {
        [getContactList.pending]: (state) => {
            state.status = "pending";
        },
        [addNewContact.pending]: (state) => {
            state.status = "pending";
        },
        [updateContactDetails.pending]: (state) => {
            state.status = "pending";
        },
        [deleteContacts.pending]: (state) => {
            state.status = "pending";
        },
        [getContactList.fulfilled]: (state, action) => {
            state.collections = action.payload.data;
            successAlertFunction(state, action);
        },
        [addNewContact.fulfilled]: (state, action) => {
            state.collections.unshift(action.payload.data);
            successAlertFunction(state, action);
        },
        [deleteContacts.fulfilled]: (state, action) => {
            state.collections = state.collections.filter(
                (contact) => !action.payload.data.includes(contact.id)
            );
            successAlertFunction(state, action);
        },
        [updateContactDetails.fulfilled]: (state, action) => {
            const targetIndex = state.collections.findIndex(
                (contact) => contact.id === action.payload.data.id
            );
            if (targetIndex > -1) {
                state.collections[targetIndex] = action.payload.data;
            }
            successAlertFunction(state, action);
        },
        [getContactList.rejected]: rejectionReducer,
        [addNewContact.rejected]: rejectionReducer,
        [updateContactDetails.rejected]: rejectionReducer,
        [deleteContacts.rejected]: rejectionReducer,
    },
});

// Export all actions inside slice
export const {
    cleanContact,
    cleanContactDetails,
    setContactDetails,
    cleanAlerts,
} = contactSlice.actions;

// By default import reducer from contactSlice
export default contactSlice.reducer;
