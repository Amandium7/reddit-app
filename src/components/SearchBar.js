import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setResults, resetQuery } from '../features/searchSlice';
import { fetchData } from '../actions/actions';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    const searchResults = useSelector((state) => state.search.results);
    const searchStatus = useSelector((state) => state.search.status);
    const searchError = useSelector((state) => state.search.error);

    const handleInputChange = (event) => {
        dispatch(setQuery(event.target.value));
    }
    const handleSearch = () => {
        dispatch(setResults(query));
        dispatch(resetQuery());
        dispatch(fetchData(query));
    }

    return (
        <div className="search-bar-module">
            <div className="gold-bar-top"></div>
            <div className="row">
                <h2>Search</h2>
                <div className="controls">
                    <input 
                        type="text"
                        value = {query}
                        onChange = {handleInputChange}
                    />
                    <button onClick={ handleSearch}>Search</button>
                </div>
                {searchStatus === 'loading' && <p className="api-text">Loading...</p>}
                {searchStatus === 'failed' && <p className="api-text">Error...{searchError}</p>}
                {/* {searchStatus === 'succeeded' && ()} */}
            </div>
            <div className="gold-bar-bottom"></div>
        </div>    
    )
};

