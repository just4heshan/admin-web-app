import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer} from 'redux-form';
// import addInfoReducer from './slices/addInfoSlice'

const store = configureStore({
    reducer: { form: formReducer }, 

});

export default store;