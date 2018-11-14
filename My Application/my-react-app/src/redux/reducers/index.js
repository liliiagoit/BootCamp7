import { combineReducers } from 'redux';
import openMenu from '../reducers/showMenuReducer';
import openTechSkills from '../reducers/openTechSkills';
import openProjects from '../reducers/openProjects';
import openEducation from '../reducers/openEducation';
import openSoftSkills from '../reducers/openSoftSkills';
import openLanguages from '../reducers/openLanguages';
import openObjectives from '../reducers/openObjectives';
import openContacts from '../reducers/openContacts';

const rootReducer = combineReducers ({
    openMenu,
    openTechSkills,
    openProjects,
    openEducation,
    openSoftSkills,
    openLanguages,
    openObjectives,
    openContacts
})

export default rootReducer;