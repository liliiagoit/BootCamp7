import React from 'react';
import PropTypes from 'prop-types';
import { showMenu } from '../../redux/actions/showMenuAction';
import { showTechSkills } from '../../redux/actions/showTechSkills';
import { showProjects } from '../../redux/actions/showProjects';
import { showEducation } from '../../redux/actions/showEducation';
import { showSoftSkills } from '../../redux/actions/showSoftSkills';
import { showLanguages } from '../../redux/actions/showLanguages';
import { showObjectives } from '../../redux/actions/showObjectives';
import { showContacts } from '../../redux/actions/showContacts';
import { connect } from 'react-redux';
import TechSkills from '../TechSkills/TechSkills';
import  SoftSkills  from '../SoftSkills/SoftSkills';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Languages from '../Languages/Languages'
import Objectives from '../Objectives/Objectives';
import Contacts from '../Contacts/Contacts';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({showMenu, openMenu, showTechSkills, openTechSkills, openProjects, showProjects, showEducation, openEducation, openSoftSkills, showSoftSkills,openLanguages,showLanguages, openObjectives, showObjectives, showContacts, openContacts }) => {
   
    return (
        <div className='header'>
        <div className='logo'>
        <a href='/' className='logo_link'>LP</a>
        </div>
        <ul className='social_list'>
            <li className='social_link'><a href='https://github.com/liliiagoit' rel="noopener noreferrer" title='github_profile' target="_blank"><i className="fab fa-github"></i></a></li>
            <li className='social_link'><a href='https://www.facebook.com/profile.php?id=100017282886485' rel="noopener noreferrer" title='facebook_profile' target="_blank"><i className="fab fa-facebook-square"></i></a></li>
            <li className='social_link'><a href='https://www.linkedin.com/in/liliia-plonsak-87b003173/' rel="noopener noreferrer" title='linkedin_profile' target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li className='social_link'><a href='skype:Liliia Plonsak?call' title='skype_profile' rel="noopener noreferrer" target="_blank"><i className="fab fa-skype"></i></a></li>
            <li className='menu_container' onClick={showMenu}><i className="fas fa-bars" title="menu"></i></li>
        </ul>
        <div className={openMenu ? 'main_menu' : 'hide'}>
        <ul className='menu_list'>
            <li className='menu_item' title='technical skills' onClick={showTechSkills}><NavLink to='/techSkills'><i className="fas fa-cogs"></i></NavLink></li>
            <li className='menu_item' title='projects' onClick={showProjects}><NavLink to='/projects'><i className="fas fa-project-diagram"></i></NavLink></li>
            <li className='menu_item' title='education' onClick={showEducation}><NavLink to='/education'><i className="fas fa-graduation-cap"></i></NavLink></li>
            <li className='menu_item' title='soft skills' onClick={showSoftSkills}><NavLink to='/softSkills'><i className="fas fa-layer-group"></i></NavLink></li>
            <li className='menu_item' title='languages' onClick={showLanguages}><NavLink to='/languages'><i className="fas fa-brain"></i></NavLink></li>
            <li className='menu_item' title='objectives' onClick={showObjectives}><NavLink to='/objectives'><i className="fas fa-braille"></i></NavLink></li>
            <li className='menu_item' title='contacts' onClick={showContacts}><NavLink to='/contacts'><i className="fas fa-file-signature"></i></NavLink></li>
        </ul>
        </div>
        {openTechSkills ? <TechSkills/> : null}
        {openProjects ? <Projects/> : null}
        {openEducation ? <Education/> : null}
        {openSoftSkills ? <SoftSkills/> : null}
        {openLanguages ? <Languages/> : null}
        {openObjectives ? <Objectives/> : null}
        {openContacts ? <Contacts/> : null}
        </div>  
    )
}


function mapStateToProps(state) {
    return {
        openMenu: state.openMenu,
        openTechSkills: state.openTechSkills,
        openProjects: state.openProjects,
        openEducation: state.openEducation,
        openSoftSkills: state.openSoftSkills,
        openLanguages: state.openLanguages,
        openObjectives: state.openObjectives,
        openContacts: state.openContacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMenu: function(){
            dispatch(showMenu())
        },
        showTechSkills: function(){
            dispatch(showTechSkills())
        },
        showProjects: function(){
            dispatch(showProjects())
        },
        showEducation: function(){
            dispatch(showEducation())
        },
        showSoftSkills: function(){
            dispatch(showSoftSkills())
        },
        showLanguages: function(){
            dispatch(showLanguages())
        },
        showObjectives: function() {
            dispatch(showObjectives())
        },
        showContacts: function() {
            dispatch(showContacts())
        }
    }

}

Header.propTypes = {
    openMenu: PropTypes.bool,
    openTechSkills: PropTypes.bool,
    openProjects: PropTypes.bool,
    openEducation: PropTypes.bool,
    openSoftSkills: PropTypes.bool,
    openLanguages: PropTypes.bool,
    openObjectives: PropTypes.bool,
    openContacts: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

