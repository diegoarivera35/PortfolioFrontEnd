import Html5 from '../assets/html5.svg';
import CSS3 from '../assets/css3.svg';
import NPM from '../assets/npm.svg';
import GitHub from '../assets/github.svg';
import SQL from '../assets/mysql.svg';
import MongoDB from '../assets/mongodb.svg';
import Jquery from '../assets/jquery.svg';
import JavaScript from '../assets/javascript.svg';
import NodeJS from '../assets/nodejs.svg';
import React from '../assets/react.svg';
import CSharp from '../assets/csharp.svg';
import DotNet from '../assets/dot-net.svg';
import PHP from '../assets/php.svg';
import Laravel from '../assets/laravel.svg';
import Photoshop from '../assets/photoshop.svg';
import Illustrator from '../assets/illustrator.svg';
import Figma from '../assets/figma.svg';
import Python from '../assets/python.svg';


const Skills = () => {

  return (
    <div className='centrar skills'>



      

      <div className="centrar" id="anchor_skills">
  <h2 className="htmlTitle">
    <span className="izquierdo">&lt;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
    Skills
    <span className="izquierdo">&lt;&frasl;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
  </h2>
</div>






      <section id="skills">
        <div className="skills_item">
          <img src={Html5} alt="html" /> HTML
        </div>  
        <div className="skills_item">
          <img src={CSS3} alt="css" /> CSS
        </div>
        <div className="skills_item">
          <img src={NPM} alt="npm" /> NPM
        </div>        
        <div className="skills_item">
          <img src={GitHub} alt="GitHub" /> GitHub
        </div>
        <div className="skills_item">
          <img src={SQL} alt="SQL" /> MySQL
        </div>
        <div className="skills_item">
          <img src={MongoDB} alt="Mongo" /> MongoDB
        </div>
        <div className="skills_item">
          <img src={Jquery} alt="Jquery" /> Jquery
        </div>                
        <div className="skills_item">
          <img src={JavaScript} alt="JS" /> JavaScript
        </div>
        <div className="skills_item">
          <img src={NodeJS} alt="NodeJS" /> NodeJS
        </div>
        <div className="skills_item">
          <img src={React} alt="React" /> React
        </div>     
        <div className="skills_item">
          <img src={Python} alt="Python" /> Python
        </div>         
        <div className="skills_item">
          <img src={CSharp} alt="CSharp" /> C#
        </div>
        <div className="skills_item">
          <img src={DotNet} alt="DotNet" /> ASP.Net
        </div>                                
        <div className="skills_item">
          <img src={PHP} alt="PHP" /> PHP
        </div>
        <div className="skills_item">
          <img src={Laravel} alt="Laravel" /> Laravel
        </div>        
        <div className="skills_item">
          <img src={Photoshop} alt="Photoshop" /> Photoshop
        </div>
        <div className="skills_item">
          <img src={Illustrator} alt="Illustrator" /> Illustrator
        </div>
        <div className="skills_item">
          <img src={Figma} alt="Figma" /> Figma
        </div>
      </section>
    </div>
  );
};

export default Skills;
