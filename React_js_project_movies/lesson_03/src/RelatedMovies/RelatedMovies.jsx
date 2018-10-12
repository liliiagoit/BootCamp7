import React from 'react';
// import Slider from "react-slick";
import './RelatedMovies.css';

const RelatedMovies = ({poster, title}) => {
    return(
        <div className='film_img_list'>
        <img className='list_film_img' src={`https://image.tmdb.org/t/p/w300${poster}`}/>        
        {/* <img className='list_film_img'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MdzGJglrIJO_3xZ0h-arBBMgJXTjN6yAnujf3qVWLGzl67mS'/> */}
        {/* <p className='similar_movie_title'>{title}</p> */}
        </div>    
    )
}

export default RelatedMovies;