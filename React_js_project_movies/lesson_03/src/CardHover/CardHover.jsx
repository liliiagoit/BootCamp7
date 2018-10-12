import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './CardHover.css';

const CardHover = ({id, addToFavourite, addToWishList}) => {
    return(
        <div className='div_appear_hover'>
        <div className='cover-button'>
        <button className='button_icon'><a href='#'><i className="far fa-heart hover_icon" data-movieid={id} onClick={addToFavourite}></i></a></button>
        <button className='button_icon'><a href='#'><i className="fas fa-th-list hover_icon" data-movieid={id} onClick={addToWishList}></i></a></button>
        <button className='button_icon'><a href='#'><i className="fab fa-rocketchat hover_icon"></i></a></button>
        <button className='button_icon'><a href='#'><NavLink to={`/cardfilm/${id}`}><i className="far fa-caret-square-right hover_icon"></i></NavLink></a></button>
        </div>
        </div>
    );
};

CardHover.propTypes = {
    id: PropTypes.string,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
}

export default CardHover;