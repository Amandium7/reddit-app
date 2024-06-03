import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configurestore({
    reducer: rootReducer,
})

export default store;