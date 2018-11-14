import React from 'react';
import './Languages.css';

const Languages = () => {
    return (
        <div className='languages_block'>
        <h2 className='language_title'>SPEECH</h2>
        <h4 className='my_language'>Languages</h4>
        <ul className='languages_container'>
            <li className='language_item' title='Proficient'>Ukrainian<p className='languages_degree'>Proficient</p></li>
            <li className='language_item' title='Proficient'>Russian<p className='languages_degree'>Proficient</p></li>
            <li className='language_item' title='Upper-Intermediate'>English<p className='languages_degree'>Upper-Intermediate</p></li>
            <li className='language_item' title='Intermediate'>Polish<p className='languages_degree'>Intermediate</p></li>
        </ul>
        </div>
    )
}

export default Languages;