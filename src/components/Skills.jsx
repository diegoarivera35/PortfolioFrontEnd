import Html5 from '../assets/Html5.svg';
import CSS3 from '../assets/CSS3.svg';
import JavaScript from '../assets/JavaScript.svg';
import GitHub from '../assets/GitHub.svg';
import PHP from '../assets/PHP.svg';
import Ruby from '../assets/RubyProgrammingLanguage.svg';
import SQL from '../assets/SQL.svg';
import Photoshop from '../assets/AdobePhotoshop.svg';
import Illustrator from '../assets/AdobeIllustrator.svg';
import Figma from '../assets/Figma.svg';

const Skills = () => {
  return (
    <div className='centrar skills'>
      <h2 id="anchor_skills">Skills</h2>
      <section id="skills">
        <div className="skills_item">
          <img src={Html5} alt="html" /> HTML
        </div>  

        
        <div className="skills_item">
          <img src={CSS3} alt="css" /> CSS
        </div>
        <div className="skills_item">
          <img src={JavaScript} alt="JS" /> JavaScript
        </div>
        <div className="skills_item">
          <img src={GitHub} alt="GitHub" /> GitHub
        </div>
        <div className="skills_item">
          <img src={PHP} alt="PHP" /> PHP
        </div>
        <div className="skills_item">
          <img src={Ruby} alt="Ruby" /> Ruby on Rails
        </div>
        <div className="skills_item">
          <img src={SQL} alt="SQL" /> SQL
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
