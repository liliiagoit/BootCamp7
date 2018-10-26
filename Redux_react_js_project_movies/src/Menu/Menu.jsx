import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {showMenu} from '../redux/actions/showMenuAction';
import {connect} from 'react-redux';
import {getTopRatedMoviesAsync} from '../redux/actions/topRatedAction';
import {playNowLength, playSoonLength, playPopularLength, playFavouriteLength, playWishListLength} from '../redux/selectors/menuSelector';
import TopRated from '../TopRated/TopRated';
// import {showMenuHendler} from '.'
import "./Menu.css";

class Menu extends Component
//  {prop, showTopRatedMovie, showMenu, showMenuHendler, playingMovies, playingSoon, popularNow, favouriteList, wishList} => 
 {
    componentDidMount(){
        this.props.getTopRatedMoviesAsync();
    }

    render(){
        return(
<div className={this.props.showMenu ? "show" : "hide"}>
   <i class="fab fa-asymmetrik"></i>
    <h1 className='logo'>Movie</h1>
    <ul className='menu-link'>
        <li className='menu-li'><i className="fas fa-film"></i><a href='#' className='menu-a'><NavLink to='/' className='menu-a'>Now playing</NavLink></a><span className='menu-span'>{this.props.playNowLength}</span></li>
        <li className='menu-li'><i className="far fa-calendar-alt"></i><a href='#' className='menu-a'><NavLink to='/comingsoon' className='menu-a'>Coming soon</NavLink></a><span className='menu-span'>{this.props.playSoonLength}</span></li>
        <li className='menu-li'><i className="far fa-clock"></i><a href='#' className='menu-a'><NavLink to='/popular' className='menu-a'>Popular</NavLink></a><span className='menu-span'>{this.props.playPopularLength}</span></li>
        <li className='menu-li'><i className="far fa-heart"></i><a href='#' className='menu-a'><NavLink to='/favourite' className='menu-a'>Favourite</NavLink></a><span className='menu-span'>{this.props.playFavouriteLength}</span></li>
        <li className='menu-li'><i className="fas fa-th-list"></i><a href='#' className='menu-a'><NavLink to='/wishlist' className='menu-a'>WishList</NavLink></a><span className='menu-span'>{this.props.playWishListLength}</span></li>
        <li className='menu-li'><i className="fab fa-rocketchat"></i><a href='#' className='menu-a'>ChatList</a><span className='menu-span'>0</span></li>
        <li className='close_li' onClick={this.props.showMenuHendler}><i className="far fa-times-circle"></i></li>
    </ul>
    <h2 className='top_movie_title'>TOP RATED</h2>
    <div className='movies_top_rated'>
    {this.props.showTopRatedMovie.map(el => <TopRated imgFilm={el.poster_path} key={el.id} id={el.id} title={el.title} vote_average={el.vote_average}/>)}
    </div>
</div>
    );
}
};

Menu.propTypes = {
showMenu: PropTypes.bool,
showMenuHendler: PropTypes.func,
    };



    function mapStateToProps(state) {
        return {
            showMenu: state.showMenuHendler,
            // playingMovies: state.showPlayNow.length,
            // playingSoon: state.showPlaySoon.length,
            // popularNow: state.showPopular.length,
            // favouriteList: state.showFavouriteList.length,
            // wishList: state.showWishList.length,
            showTopRatedMovie: state.showTopRatedMovie,
            playNowLength: playNowLength(state),
            playSoonLength: playSoonLength(state),
            playPopularLength: playPopularLength(state),
            playFavouriteLength: playFavouriteLength(state),
            playWishListLength: playWishListLength(state),
            // sortTopRated: sortTopRated(state),
        }
    }

    function mapDispatchToProps(dispatch){
        return {
            showMenuHendler: function() {
                dispatch(showMenu());
            },
            getTopRatedMoviesAsync: function() {
                dispatch(getTopRatedMoviesAsync())
            }
        }
    }



export default connect (mapStateToProps, mapDispatchToProps)(Menu);