import React from 'react';
import {NavLink} from 'react-router-dom';
import './SearchFilmCard.css';

const SearchFilmCard = ({imgFilm, title, id}) => {
    return (
         <div>
              <NavLink to={`/cardfilm/${id}`}>
            <img src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`} alt='top_pic'/>
           </NavLink>
            <span>{title}</span>
        </div>
    )
}

export default SearchFilmCard;