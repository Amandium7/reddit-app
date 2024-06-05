import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk (
    'search/fetchData',
    async (query, thunkAPI) => {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(`https://www.reddit.com/search.json?q=${encodedQuery}`);
        const data = response.json();
        return data;
    }
)