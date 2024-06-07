import React from 'react';
import heroImage from '../assets/images/reddit-app-hero.jpg';

export const PostItem = ({result}) => {
    const newTitle = result.data.title.length > 50 
    ? result.data.title.substring(0, 50) + '...'
    : result.data.title;

    const link = result.data.permalink

    let newImage;
    if (result.data.thumbnail.includes('https://external-preview') || 
    result.data.thumbnail === "self" ||
    result.data.thumbnail === "spoiler") {
        newImage = heroImage;
    } else {
        newImage = result.data.thumbnail;
    }

    return (
        <div className="post-item">
            <a href={`https://www.reddit.com/${link}`} className="post-link">
                <h2>{newTitle}</h2>
                <div className="picture">
                    <img src={newImage} alt={result.data.title}/>
                </div>
            </a>
        </div>
    )
}