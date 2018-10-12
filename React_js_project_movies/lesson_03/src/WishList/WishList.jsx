import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import './WishList.css';

class WishList extends Component {
    state = {
        wishList: [],
        isLoading: true,
    };


componentDidMount () {
   let result = JSON.parse(localStorage.getItem('wishlist'));

   this.setState({
    wishList: result,
    isLoading: false,
})

};

deleteFromWishList = (event) => {
    this.props.addToWishList(event);
    let update = JSON.parse(localStorage.getItem('wishlist'));

    this.setState({
        wishList: update,
        isLoading: false,
    })
};



    render(){
        return(
            <div>
            {this.state.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.state.wishList} addToWishList={this.deleteFromWishList}/>}
            </div>
        )
    }
}

export default WishList;