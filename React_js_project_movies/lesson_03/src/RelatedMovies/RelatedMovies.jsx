import React from 'react';
import CardHover from '../CardHover/CardHover';
// import Slider from "react-slick";
import './RelatedMovies.css';

const RelatedMovies = ({poster, id, addToFavourite, addToWishList}) => {
    return(
        <div className='film_img_list'>
        <img className='list_film_img' src={`https://image.tmdb.org/t/p/w300${poster}`}/>  
        <CardHover id={id} addToFavourite={addToFavourite} addToWishList={addToWishList}/>
        </div>    
    )
}

export default RelatedMovies;