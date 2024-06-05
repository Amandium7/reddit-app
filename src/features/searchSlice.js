import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../actions/actions';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
        status: 'idle',
        error: null
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchData.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.results = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
    }
})

export const  { setQuery, setResults, resetQuery } = searchSlice.actions;
export default searchSlice.reducer;