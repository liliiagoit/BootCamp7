import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useLoading} from '../redux/actions/isLoadingAction';
// import {addToWishList, deleteFromWishList, openWishList} from '../redux/actions/wishListAction';
import {deleteFromWishList, openWishList} from '../redux/actions/wishListAction';
import {sortWishList} from '../redux/selectors/menuSelector';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import './WishList.css';

class WishList extends Component {
    // state = {
    //     // wishList: [],
    //     // isLoading: true,
    //     isLoading: false,

    // };


componentDidMount (event) {
    this.props.openWishList();
    // this.props.showWishListAsync(event);
//    let result = JSON.parse(localStorage.getItem('wishlist'));

//    this.setState({
//     wishList: result,
//     isLoading: false,
// })

};

// deleteFromWishList = (event) => {
//     this.props.addToWishList(event);
//     let update = JSON.parse(localStorage.getItem('wishlist'));

//     this.setState({
//         wishList: update,
//         isLoading: false,
//     })
// };



    render(){
        return(
            <div>
             {/* {this.props.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> :  */}
  <Grid prop={this.props.wishList} addToWishList={this.props.deleteFromWishList}/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        wishList: sortWishList(state),
        isLoading: state.showIsLoading
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteFromWishList: function(event) {
            dispatch(deleteFromWishList(event))
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    openWishList: function() {
        dispatch(openWishList())
    }
}
}

WishList.propTypes = {
    wishList: PropTypes.array,
    isLoading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);