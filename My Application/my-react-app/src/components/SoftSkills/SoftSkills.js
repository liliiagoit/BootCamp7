import React from 'react';
import './SoftSkills.css';

const SoftSkills = () => {
    return (
        <div className='soft_skills_block'>
        <h2 className='soft_skills_title'>ABILITY</h2>
        <h4 className='my_skills'><span className='title_skill_span'>Soft</span> Skills</h4>
        <ul className='soft_skills_container'>
            <li className='soft_skill_title'>Teamwork</li>
            <li className='soft_skill_title'>Communication</li>
            <li className='soft_skill_title'>Creativity</li>
            <li className='soft_skill_title'>Adaptability</li>
            <li className='soft_skill_title'>Work Ethic</li>
            <li className='soft_skill_title'>Interpersonal Skills</li>
            <li className='soft_skill_title'>Time Management</li>
            <li className='soft_skill_title'>Attention to Detail</li>
            <li className='soft_skill_title'>Leadership</li>
            <li className='soft_skill_title'>Problem-Solving</li>
        </ul>
        </div>
    )
}

export default SoftSkills;