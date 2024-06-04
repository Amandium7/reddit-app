import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setResults, resetQuery } from '../features/searchSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);

    const handleInputChange = (event) => {
        dispatch(setQuery(event.target.value));
    }
    const handleSearch = () => {
        const testing = query;
        console.log (testing);
        dispatch(setResults(testing));
        dispatch(resetQuery());
    }

    return (
        <div className="search-bar">
            <h2>Search</h2>
            <input 
                type="text"
                value = {query}
                onChange = {handleInputChange}
            />
            <button onClick={ handleSearch}>Search</button>
        </div>    
    )
};

