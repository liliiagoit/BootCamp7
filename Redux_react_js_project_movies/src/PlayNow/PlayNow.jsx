import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from "../Grid/Grid";
import Loader from 'react-loader-spinner';
import {nowPlayingAsync} from '../redux/actions/playNowAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPlayNow} from '../redux/selectors/menuSelector';
// import {playNowLength} from '../redux/selectors/menuSelector';
import './PlayNow.css';

class PlayNow extends Component {
    // state = {
    //     // playingMovies: [],
    //     isLoading: true,
    // }

componentDidMount(){
    this.props.nowPlayingAsync();
    // this.props.useLoading();
    // fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=1&region=UA')
    // .then(response => response.ok ? response.json() : null)
    // .then(data => data.results)
    // .then(result => this.setState({
    //     playingMovies: result,
    //     isLoading: false,
    // }))
    // .catch(error => console.log(error))

}

    render(){
        // console.log(this.props.playingMovies)
        return(
            <div>
             {this.props.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.props.playingMovies} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>}
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        playingMovies: sortPlayNow(state),
        isLoading: state.showIsLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nowPlayingAsync: function(){
            dispatch(nowPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
        },
        showWishListAsync: function (event){
            dispatch(showWishListAsync(event))
        },
        showFavouriteListAsync: function(event){
            dispatch(showFavouriteListAsync(event))
        },
    }
}

PlayNow.propTypes = {
    playingMovies: PropTypes.array,
    isLoading: PropTypes.bool,
}
export default connect (mapStateToProps, mapDispatchToProps)(PlayNow);