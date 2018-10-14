import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import './Popular.css';


class Popular extends Component {
    state = {
        popularNow: [],
        isLoading: true,
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=ru-RUS&page=2')
        .then(response => response.ok ? response.json() : null)
        .then(data => data.results)
        .then(result => this.setState({
            popularNow: result,
            isLoading: false,
        }))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                {this.setState.isLoading ? <Loader 
                 type="Plane"
                 color="#00BFFF"
                 height="100"	
                 width="100"/> : 
                 <Grid prop={this.state.popularNow} addToFavourite={this.props.addToFavourite} addToWishList={this.props.addToWishList}/>
            }
            </div>
        )
    }
}


export default Popular;