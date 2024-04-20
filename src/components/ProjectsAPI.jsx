import { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectsAPI() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    axios.get('http://localhost:8889/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
          <div className="centrar" id='Projects'>
      <h2>Projects</h2>

      <section id="projects">



      {projects.map(project => (
        <div key={project._id} className="card">
          <img className="card-img" src={`http://phpdatabase.great-site.net/images/${project.imageURL}`} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-text">{project.description}</p>
            <a href={project.URL} className="buton-diego">
              Visit Project
            </a>
          </div>
        </div>
      ))}


      </section>
      </div>
    </div>
  );
}

export default ProjectsAPI;
