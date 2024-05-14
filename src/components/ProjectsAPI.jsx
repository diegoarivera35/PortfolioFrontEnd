import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosFolderOpen } from "react-icons/io";

function ProjectsAPI() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    // axios.get('http://localhost:8889/projects')
    axios.get('https://backend.darawebdev.com/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
          <div className="centrar" id='anchor_projects'>




          <div className="centrar" >
  <h2 className="htmlTitle">
    <span className="izquierdo">&lt;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
    Projects
    <span className="izquierdo">&lt;&frasl;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
  </h2>
</div>








      <section id="projects">



      {projects.map(project => (
        <div key={project._id} className="card">
          <div className="headCard"><div className="circulo1"></div><div className="circulo2"></div><div className="circulo3"></div>
          
          <div className='projTitle'>
          <IoIosFolderOpen /> <h4 className="card-title">{project.name}</h4>

          </div>
          
          </div>


          <img className="card-img" src={`https://images-portfolio-diego-rivera.s3.us-east-2.amazonaws.com/${project.imageURL}`} alt="Card image cap" />
          <div className="card-body">
            
            <p className="card-text">{project.description}</p>
            <a href={project.URL} className="buton-diego" target='_blank'>
              Visit Project -&gt;
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
