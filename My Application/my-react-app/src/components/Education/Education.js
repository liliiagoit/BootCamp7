import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className='education_block'>
            <h2 className='education_title'>TRAINING</h2>
            <h4 className='my_education'><span className='title_span'>My</span> Education</h4>
            <div className='education_content'>
     <div className='education_container'><h5 className='title_education'>Web-development</h5>
     <p className='data_title'>2018  |</p>
     <p className='degree_item'>IT BootCamp | Fullstack developer</p>
     <p className='title_institution'>GoIT | UP Scale Academy</p>
     </div>
     <div className='education_container'><h5 className='title_education'>English</h5>
     <p className='data_title'>2017  |</p><p className='degree_item'>Upper-Intermediate</p>
     <p className='title_institution'>English School Flash</p>
     </div>
     <div className='education_container'><h5 className='title_education'>Journalism</h5>
     <p className='data_title'>2010 - 2015  |</p><p className='degree_item'>Magister</p>
     <p className='title_institution'>The John Paul II Catholic University of Lublin</p>
     </div>
     </div>
        </div>
    )
}

export default Education;