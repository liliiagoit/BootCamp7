import React from 'react';
import './TopRated.css';

const TopRated = ({imgFilm, title}) => {
    return(
        <div>
            <img src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`} alt='top_pic'/>
            <span>{title}</span>
        </div>
    )
}

export default TopRated;