import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../redux/store/store';
import { Switch, Route } from 'react-router-dom'; 
import Search from '../Search/Search';
// import Grid from '../Grid/Grid';
import PlayNow from '../PlayNow/PlayNow';
import PlaySoon from '../PlaySoon/PlaySoon';
import WishList from '../WishList/WishList';
import Favourite from '../Favourite/Favourite';
import './Main.css';
import ApearFilmCard from '../ApearFilmCard/ApearFilmCard';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import Popular from '../Popular/Popular';



const Main = ({addToFavourite, addToWishList, removeFromFavourite, removeFromWishList}) => {
        return(
            <div className='main_div'>
                <Search/>
                <ConnectedRouter history={history}> 
                <Switch>
                    <Route exact path='/' render={props => <PlayNow addToFavourite={addToFavourite} addToWishList={addToWishList}/>}/>
                    <Route path='/comingsoon' render={props => <PlaySoon addToFavourite={addToFavourite} addToWishList={addToWishList}/>}/>
                    <Route path='/wishlist' render={props => <WishList addToWishList={removeFromWishList}/>}/>
                    <Route path='/favourite' render={props => <Favourite addToFavourite={removeFromFavourite}/>}/>
                    <Route path='/popular' render={props => <Popular addToFavourite={addToFavourite} addToWishList={addToWishList}/>}/>
                    {/* <Route path='/favourite' component={Favourite} addToFavourite={removeFromFavourite}/> */}
                    <Route path='/cardfilm/:id' component={ApearFilmCard}/>
                    {/* <Route path='/similarMovie/:id' component={RelatedMovies}/> */}
                </Switch>
                </ConnectedRouter>
                {/* <Grid/> */}
            </div>

        )
    
}



Main.propTypes = {
    removeFromFavourite: PropTypes.func,
    removeFromWishList: PropTypes.func,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
    props: PropTypes.array,
};

export default Main;