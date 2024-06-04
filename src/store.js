import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/index.js';
import searchReducer from './features/searchSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
    }
})

export default store;