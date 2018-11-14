import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <NavLink to='/'>
        <div className='main_content_title'>
        <p className='title_name'>Liliia</p>
        <p className='title_surname'>Plonsak</p>
        <span className='title_developer'>I am a <span className='title_developer_bold'>web developer</span>.|</span>
        <h5 className='created_title'>Created by Liliia Plonsak | 2018</h5>
        </div>
        </NavLink>
    )
}

export default Main;