import React, {Component} from 'react';
import Grid from "../Grid/Grid";
import Loader from 'react-loader-spinner';
import './PlayNow.css';

class PlayNow extends Component {
    state = {
        playingMovies: [],
        isLoading: true,
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=1&region=UA')
    .then(response => response.ok ? response.json() : null)
    .then(data => data.results)
    .then(result => this.setState({
        playingMovies: result,
        isLoading: false,
    }))
    .catch(error => console.log(error))

}

    render(){
        return(
            <div>
             {this.state.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.state.playingMovies} addToFavourite={this.props.addToFavourite} addToWishList={this.props.addToWishList}/>}
            </div>
        )
    }
}

export default PlayNow;