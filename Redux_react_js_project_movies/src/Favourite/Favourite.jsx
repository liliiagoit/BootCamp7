import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteFromFavouriteList, getFavouriteList} from '../redux/actions/favouriteAction';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import './Favourite.css';

class Favourite extends Component {
    // state = {
    //     favouriteList: [],
    //     isLoading: true,
    // };

componentDidMount() {
    this.props.getFavouriteList();
    // let getFavouriteFilms = JSON.parse(localStorage.getItem('favourite'));

    // this.setState({
    //     favouriteList: getFavouriteFilms,
    //     isLoading: false,
    // })
}


// deleteFavouriteList = (event) => {
//     this.props.addToFavourite(event);
//     let update = JSON.parse(localStorage.getItem('favourite'));

//     this.setState({
//         favouriteList: update,
//         isLoading: false,
//     })
// }


    render(){
        return(
            <div>
     {
        //  this.state.isLoading ? <Loader className='loader'
        //     margin='300'
        //     type="Plane"
        //     color="#00BFFF"
        //     height="100"	
        //     width="100"
        //  /> : 
         
         
         <Grid prop={this.props.favouriteList} addToFavourite={this.props.deleteFromFavouriteList}/>}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        favouriteList: state.showFavouriteList,
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteFromFavouriteList: function(event){
            dispatch(deleteFromFavouriteList(event))
        },
        getFavouriteList: function() {
            dispatch(getFavouriteList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);