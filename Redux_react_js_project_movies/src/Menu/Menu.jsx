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
   <i className="fab fa-asymmetrik"></i>
    <h1 className='logo'><a href='/' className='logo_link'>Movie</a></h1>
    <ul className='menu-link'>
        <li className='menu-li'><i className="fas fa-film"></i><NavLink to='/' className='menu-a'>Now playing</NavLink><span className='menu-span'>{this.props.playNowLength}</span></li>
        <li className='menu-li'><i className="far fa-calendar-alt"></i><NavLink to='/comingsoon' className='menu-a'>Coming soon</NavLink><span className='menu-span'>{this.props.playSoonLength}</span></li>
        <li className='menu-li'><i className="far fa-clock"></i><NavLink to='/popular' className='menu-a'>Popular</NavLink><span className='menu-span'>{this.props.playPopularLength}</span></li>
        <li className='menu-li'><i className="far fa-heart"></i><NavLink to='/favourite' className='menu-a'>Favourite</NavLink><span className='menu-span'>{this.props.playFavouriteLength}</span></li>
        <li className='menu-li'><i className="fas fa-th-list"></i><NavLink to='/wishlist' className='menu-a'>WishList</NavLink><span className='menu-span'>{this.props.playWishListLength}</span></li>
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

    Menu.propTypes = {
        showMenu: PropTypes.bool,
        showTopRatedMovie: PropTypes.array,
        playNowLength: PropTypes.number,
        playSoonLength: PropTypes.number,
        playPopularLength: PropTypes.number,
        playFavouriteLength: PropTypes.number,
        playWishListLength: PropTypes.number,
        // showMenuHendler: PropTypes.func,

            };

export default connect (mapStateToProps, mapDispatchToProps)(Menu);