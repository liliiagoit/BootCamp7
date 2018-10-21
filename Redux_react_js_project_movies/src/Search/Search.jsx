import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { showMenu } from '../redux/actions/showMenuAction';
import { showChat } from '../redux/actions/showChatAction';
import {changeInput} from '../redux/actions/inputValueAction';
import {getSimilarWords, getInputValueFetchAsync} from '../redux/actions/getInputValueAction';
import SearchFilmList from '../SearchFilmList/SearchFilmList';
import './Search.css';

const Search = ({showMenuHendler, showChatHendler, changeInput, inputSearchValue, getSimilarWords, getInputValueFetchAsync}) => {
    return(
        <div className='div_main'>
        <label className='label_search'>
        <form className='form_main'>
        <input className='input_main' onChange={(event) => {changeInput(event); getInputValueFetchAsync(inputSearchValue)}} value={inputSearchValue} type='text' placeholder='Search movie...'/>
        <i className="fas fa-bars" onClick={showMenuHendler}></i>
        <i className="far fa-comments" onClick={showChatHendler}></i>
        <i className="fas fa-search"></i>
        {inputSearchValue.length ? <SearchFilmList/> : null}
        </form>
        </label>
        </div>
    );
};

Search.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
};


function mapStateToProps(state) {
    return {
        inputSearchValue: state.inputSearchValue,
    }
}

function mapDispatchToProps(dispatch){
    return {
        showMenuHendler: function() {
            dispatch(showMenu());
        },
        showChatHendler: function() {
            dispatch(showChat());
        },
        changeInput: function(event) {
            dispatch(changeInput(event))
        },
        getInputValueFetchAsync: function(value) {
            dispatch(getInputValueFetchAsync(value))
        },
        getSimilarWords: function(result) {
            dispatch(getSimilarWords(result))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
