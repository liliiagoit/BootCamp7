import React from 'react';
import CardHover from '../CardHover/CardHover';
import{NavLink} from 'react-router-dom';
// import Slider from "react-slick";
import './RelatedMovies.css';

const RelatedMovies = ({poster, id, addToFavourite, addToWishList}) => {
    return(
        
        <div className='film_img_list'>
        <NavLink to={`/cardfilm/${id}`}>
       
     <img className='recommend' src={`https://image.tmdb.org/t/p/w300${poster}` ? `https://image.tmdb.org/t/p/w300${poster}` : `https://cdn-images-1.medium.com/max/1600/1*jfgr2qQ3d8JCXpQHLnIQPg.png`}/>  
     </NavLink>
        {/* <CardHover id={id} addToFavourite={addToFavourite} addToWishList={addToWishList}/> */}
        </div>    
    )
}

export default RelatedMovies;