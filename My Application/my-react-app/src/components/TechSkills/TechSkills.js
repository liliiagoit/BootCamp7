import React from 'react';
import icon from '../../svg/redux.svg';
import { NavLink } from 'react-router-dom';
import './TechSkills.css';

const TechSkills = () => {
    return (
        <NavLink to='/techskills'>
        <div className='techSkills_container'>
         <h2 className='resume_title'>RESUME</h2>
         <h4 className='my_tech_skills'>Technical Skills</h4>
         <div className='skills_content'>
<ul className='tech_skills_list'>
    <li className='tech_skills_title'>HTML<i className="fab fa-html5"></i></li>
    <li className='tech_skills_title'>CSS<i className="fab fa-css3-alt"></i></li>
    <li className='tech_skills_title'>JavaScript<i className="fab fa-node-js"></i></li>
    <li className='tech_skills_title'>React<i className="fab fa-react"></i></li>
    <li className='tech_skills_title'>Redux<object type="image/svg+xml" data={icon} width="18" height="18" id="svg_img">
</object></li>
    <li className='tech_skills_title'>Git<i className="fab fa-git-square"></i></li>
    <li className='tech_skills_title'>Gulp<i className="fab fa-gulp"></i></li>
    <li className='tech_skills_title'>Sass<i className="fab fa-sass"></i></li>
    <li className='tech_skills_title'>Trello<i className="fab fa-trello"></i></li>
     
 
    <li className='tech_skills_title'>BEM</li>
</ul>
         </div>
        </div>
        </NavLink>
    )
}

export default TechSkills;