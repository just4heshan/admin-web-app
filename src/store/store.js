import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './dummyReducer'

const store = configureStore({
    reducer: {rootReducer},
})

export default store;