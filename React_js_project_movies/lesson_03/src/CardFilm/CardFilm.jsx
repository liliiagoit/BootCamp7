import React from 'react';
import PropTypes from 'prop-types'; 
import CardHover from '../CardHover/CardHover';
import './CardFilm.css';

const CardFilm = ({imgFilm, id, addToFavourite, addToWishList}) => {
    // console.log(this.props);
    return(
        <div className='card_film'>
        <img className='card_img' alt='picture' src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}`: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxspU4wCNhCWkNkgXJtmPu9W11bJQnawqVFeMqeoCXq19CoX7`}/>
        <CardHover id={id} addToFavourite={addToFavourite} addToWishList={addToWishList}/>
        </div>
    );
};

CardFilm.prototypes = {
    imgFilm: PropTypes.string,
    id: PropTypes.string,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
}

export default CardFilm;