import React from 'react';
import './Projects.css';

const Projects = () => {
return (
    <div className='project_block'>
    <h2 className='project_title'>EXPERIENCE</h2>
    <h4 className='own_projects'><span className='title_span'>Own</span> Projects</h4>
   <div className='project_container'><h6 className='title_skills'>HTML \ CSS<h6 className='joint_project_title'>A joint project</h6><a href='https://vadympichurin.github.io/BC7-html-Final-Project//build/#' title='go to project' rel="noopener noreferrer" target='_blank'><i className="fas fa-code link_icon"></i></a></h6></div>
   <div className='project_container'><h6 className='title_skills'>JS<a href='http://js-game.zzz.com.ua/' title='go to project' rel="noopener noreferrer" target='_blank'><i className="fas fa-laptop-code link_icon"></i></a></h6></div>
   <div className='project_container'><h6 className='title_skills'>REACT / REDUX<a href='http://movie-app.zzz.com.ua/' title='go to project' rel="noopener noreferrer" target='_blank'><i className="fas fa-film link_icon"></i></a></h6></div>
    </div>
)
}

export default Projects;