import React from 'react';
import PropTypes from 'prop-types';
import CardFilm from '../CardFilm/CardFilm';
import ApearFilmCard from '../ApearFilmCard/ApearFilmCard';
import Loader from 'react-loader-spinner';
import './Grid.css';



const Grid = ({prop, addToFavourite, addToWishList}) => {
    return(
        <div className='div_grid'>
        {
            prop===null ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : 
         prop.map(el => <CardFilm imgFilm={el.poster_path} key={el.id} id={el.id} addToFavourite={addToFavourite} addToWishList={addToWishList}/>)}
       {/* <ApearFilmCard/> */}
        </div>
    );
};

// const Grid = ({result}) => {
//     return(
//         <div className='div_grid'>
//         {result.map(el => <CardFilm imgFilm={el.poster_path} keyFilm={el.id}/>)}
//         </div>
//     );
// };

Grid.propTypes = {
    prop: PropTypes.array,
    addToFavourite: PropTypes.func,
    addToWishList: PropTypes.func,
    // removeFromFavourite: PropTypes.func,
    // array: PropTypes.array,
}

export default Grid;