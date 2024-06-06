import React from 'react';
import { useSelector } from 'react-redux';
import { PostItem } from './PostItem';

export const PostList = () => {
    const searchData = useSelector((state) => state.search.results); 

    if (!searchData || !searchData.data || !searchData.data.children) {
        return null; // Or you can return a message indicating no data is available
    }

    return (
        <div className="post-list-module">
            <div className="row">
                {searchData.data.children.map((result, index) => (
                    <PostItem key={index} result={result} />
                ))}
            </div>
        </div>
        )

}