import React from 'react';
import SearchFilmCard from '../SearchFilmCard/SearchFilmCard';
import {connect} from 'react-redux';
import './SearchFilmList.css';

const SearchFilmList = ({getInputValueReducer}) => {
    return (
        <div>
        <ul className='search_movie_container'>
            {getInputValueReducer.map(el => <SearchFilmCard imgFilm={el.poster_path} key={el.id} id={el.id} title={el.title}/>)}
        </ul>
        </div>
    )
}

function mapStateToProps(state){
    return {
        getInputValueReducer: state.getInputValueReducer,
    }
}

export default connect(mapStateToProps, null)(SearchFilmList);
