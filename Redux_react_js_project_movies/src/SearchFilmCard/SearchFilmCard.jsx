import React from 'react';
import {NavLink} from 'react-router-dom';
import './SearchFilmCard.css';

const SearchFilmCard = ({imgFilm, title, id}) => {
    return (
         <li className='list_img_film'>
              <NavLink to={`/cardfilm/${id}`}>
            <img className='search_img' src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`} alt='top_pic'/>
           </NavLink>
            <h5 className='title_search_movie'>{title}</h5>
        </li>
    )
}

export default SearchFilmCard;