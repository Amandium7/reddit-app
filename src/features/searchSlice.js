import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
        },
        resetQuery: (state) => {
            state.query = '';
        }
    }
})

export const  { setQuery, setResults, resetQuery } = searchSlice.actions;
export default searchSlice.reducer;