import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import { popularPlayingAsync } from '../redux/actions/showPopularAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPopular} from '../redux/selectors/menuSelector';
import './Popular.css';


class Popular extends Component {
    // state = {
    //     popularNow: [],
    //     isLoading: true,
    // }

    componentDidMount(){
        this.props.popularPlayingAsync();
        // fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
        // .then(response => response.ok ? response.json() : null)
        // .then(data => data.results)
        // .then(result => this.setState({
        //     popularNow: result,
        //     isLoading: false,
        // }))
        // .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                {this.props.isLoading ? <Loader 
                 type="Plane"
                 color="#00BFFF"
                 height="100"	
                 width="100"/> : 
                 <Grid prop={this.props.popularNow} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>
            }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{
        popularNow: sortPopular(state),
        isLoading: state.showIsLoading
    }
}

function mapDispatchToProps(dispatch){
    return{
        popularPlayingAsync: function() {
            dispatch(popularPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    showWishListAsync: function(event){
        dispatch(showWishListAsync(event))
    },
    showFavouriteListAsync: function(event) {
        dispatch(showFavouriteListAsync(event))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps) (Popular);