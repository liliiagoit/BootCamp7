import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import { soonPlayingAsync } from '../redux/actions/playSoonAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPlaySoon} from '../redux/selectors/menuSelector';
import './PlaySoon.css';

class PlaySoon extends Component {
    // state={
    //     playingSoon: [],
    //     isLoading: true,
    // };

    componentDidMount(){
        this.props.soonPlayingAsync();
        // fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
        // .then(response => response.ok ? response.json() : null)
        // .then(data => data.results)
        // .then(result => this.setState({
        //     playingSoon: result,
        //     isLoading: false,
        // }))
        // .catch(error => console.log(error))
    }

    render(){
        // console.log(playingSoon)
        return(
            <div>
            {this.props.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.props.playingSoon} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>}
            </div>
        )
    }

}


function mapStateToProps(state){
    return {
        playingSoon: sortPlaySoon(state),
        isLoading: state.showIsLoading,
    }
}

function mapDispatchToProps(dispatch){
    return{
        soonPlayingAsync: function() {
            dispatch(soonPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    showWishListAsync: function(event) {
        dispatch(showWishListAsync(event))
    },
    showFavouriteListAsync: function(event) {
        dispatch(showFavouriteListAsync(event))
    }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(PlaySoon);