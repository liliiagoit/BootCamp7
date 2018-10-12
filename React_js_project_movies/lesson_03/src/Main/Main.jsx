import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Switch, Route } from 'react-router-dom'; 
import Search from '../Search/Search';
// import Grid from '../Grid/Grid';
import PlayNow from '../PlayNow/PlayNow';
import PlaySoon from '../PlaySoon/PlaySoon';
import WishList from '../WishList/WishList';
import Favourite from '../Favourite/Favourite';
import './Main.css';
import ApearFilmCard from '../ApearFilmCard/ApearFilmCard';



const Main = ({showMenuHendler, showChatHendler, addToFavourite, addToWishList, removeFromFavourite, removeFromWishList}) => {
        return(
            <div className='main_div'>
                <Search showMenuHendler={showMenuHendler} showChatHendler={showChatHendler}/>
                <Switch>
                    <Route exact path='/' render={props => <PlayNow addToFavourite={addToFavourite} addToWishList={addToWishList}/>}/>
                    <Route path='/comingsoon' render={props => <PlaySoon addToFavourite={addToFavourite} addToWishList={addToWishList}/>}/>
                    <Route path='/wishlist' render={props => <WishList addToWishList={removeFromWishList}/>}/>
                    <Route path='/favourite' render={props => <Favourite addToFavourite={removeFromFavourite}/>}/>
                    {/* <Route path='/favourite' component={Favourite} addToFavourite={removeFromFavourite}/> */}
                    <Route path='/cardfilm/:id' component={ApearFilmCard}/>
                </Switch>
                {/* <Grid/> */}
            </div>
        )
    
}

Main.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
};

export default Main;