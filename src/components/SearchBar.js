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
        // const testing = query;
        // console.log (testing);
        dispatch(setResults(query));
        dispatch(resetQuery());
        dispatch(fetchData(query));
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
            {searchStatus === 'loading' && <p>Loading...</p>}
            {searchStatus === 'failed' && <p>Error...{searchError}</p>}
            {searchStatus === 'succeeded' && (
                <ul>
                    {searchResults.data.children.map((result, index) => (
                        <li key={index}>{result.data.title} <img src={result.data.thumbnail} alt={result.data.title}/></li>
                        
                    ))}
                </ul>
            )}
        </div>    
    )
};

