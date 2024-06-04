import React from 'react';
import heroImage from '../assets/images/reddit-app-hero.jpg';

export const Hero = () => {
    return (
        <div className="hero">      
            <div className="title">
                <h1>Reddit API App</h1>
            </div>
            <div className="media">
                <div className="picture"> 
                    <img src={heroImage} alt="Colorfull background image"></img>
                </div>
            </div>
        </div>
    )
}