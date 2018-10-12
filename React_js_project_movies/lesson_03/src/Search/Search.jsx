import React from 'react';
import PropTypes from 'prop-types'; 
import './Search.css';

const Search = ({showMenuHendler, showChatHendler}) => {
    return(
        <div className='div_main'>
        <label className='label_search'>
        <form className='form_main'>
        <input className='input_main' type='text' placeholder='Search movie...'/>
        <i className="fas fa-bars" onClick={showMenuHendler}></i>
        <i className="far fa-comments" onClick={showChatHendler}></i>
        <i className="fas fa-search"></i>
        </form>
        </label>
        </div>
    );
};

Search.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
};

export default Search;
