import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Menu.css";

const Menu = ({showMenu, showMenuHendler}) => {
    return(
<div className={showMenu ? "show" : "hide"}>
   <i class="fab fa-asymmetrik"></i>
    <h1 className='logo'>Movie</h1>
    <ul className='menu-link'>
        <li className='menu-li'><i className="fas fa-film"></i><a href='#' className='menu-a'><NavLink to='/' className='menu-a'>Now playing</NavLink></a><span className='menu-span'>00</span></li>
        <li className='menu-li'><i className="far fa-calendar-alt"></i><a href='#' className='menu-a'><NavLink to='/comingsoon' className='menu-a'>Coming soon</NavLink></a><span className='menu-span'>00</span></li>
        <li className='menu-li'><i className="far fa-clock"></i><a href='#' className='menu-a'><NavLink to='/popular' className='menu-a'>Popular</NavLink></a><span className='menu-span'>00</span></li>
        <li className='menu-li'><i className="far fa-heart"></i><a href='#' className='menu-a'><NavLink to='/favourite' className='menu-a'>Favourite</NavLink></a><span className='menu-span'>00</span></li>
        <li className='menu-li'><i className="fas fa-th-list"></i><a href='#' className='menu-a'><NavLink to='/wishlist' className='menu-a'>WishList</NavLink></a><span className='menu-span'>00</span></li>
        <li className='menu-li'><i className="fab fa-rocketchat"></i><a href='#' className='menu-a'>ChatList</a><span className='menu-span'>00</span></li>
        <li className='close_li' onClick={showMenuHendler}><i className="far fa-times-circle"></i></li>
    </ul>
</div>
    );
};

Menu.propTypes = {
showMenu: PropTypes.bool,
showMenuHendler: PropTypes.func,
    };



export default Menu;