import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import './PlaySoon.css';

class PlaySoon extends Component {
    state={
        playingSoon: [],
        isLoading: true,
    };

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
        .then(response => response.ok ? response.json() : null)
        .then(data => data.results)
        .then(result => this.setState({
            playingSoon: result,
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
         /> : <Grid prop={this.state.playingSoon} addToFavourite={this.props.addToFavourite} addToWishList={this.props.addToWishList}/>}
            </div>
        )
    }

}

export default PlaySoon;