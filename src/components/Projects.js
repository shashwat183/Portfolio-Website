import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode, faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div className="projects-container">
    <h1>Projects</h1>
      <div className="project">
        <h2>Rapid Notes</h2>
        <p>Note taking app built using Angular Frontend with a Firebase backend.
          Auth managed using OAuth2.0.
          Deployed using Firebase.</p>
        <div className='project-icons'>
          <FontAwesomeIcon icon={faCode} className="icon"/>
          <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon"/>
        </div> 
      </div>
      <div className="project">
        <h2>Retro Snake Game in Python</h2>
        <p>Classic snake game written in python using pygame.</p>
        <FontAwesomeIcon icon={faCode} className="icon"/>
      </div>
      <div className="project">
        <h2>Todo List Web App</h2>
        <p>Simple ToDo List webapp allowing a user to create new tasks that are 
          automatically added to the todo list. The user can drag the task to done column
          once it is finished. Also providing basic functionality like deleting a task.
          Auth managed using OAuth2.0.
          Deployed on Heroku.</p>
        <FontAwesomeIcon icon={faCode} className="icon"/>
      </div>
      <div className="project">
        <h2>Task Focus - Task management API written in JAVA</h2>
        <p>Simple CRUD app for task management written in JAVA using Spring Boot.</p>
        <FontAwesomeIcon icon={faCode} className="icon"/>
      </div>
    </div>
  );
}

export default Projects;
