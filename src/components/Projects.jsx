import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import pro5 from '../assets/pro5.png';
import pro6 from '../assets/pro6.png';
import pro7 from '../assets/pro7.png';
import pro8 from '../assets/pro8.png';
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="centrar" id='Projects'>
      <h2>Projects</h2>

      <section id="projects">
        <div className="card">
          <img className="card-img" src={pro1} alt="Card image" />
          <div className="card-body">
            <h3 className="card-title">
              Performance Parts CA
            </h3>
            <p className="card-text">
            Prototype in Figma and MVP in HTML, CSS, and JS for a website for Performance Parts Canada, with responsive design and overall UX improvements.
            </p>
            <a href="https://www.figma.com/proto/ByHZagYFUdJaYm35iBqQJD/Website-Re-design-PPC.?node-id=408-237&starting-point-node-id=177%3A697&scaling=scale-down" className="buton-diego">
            <FaFigma /> Visit project
            </a>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={pro2} alt="Card image" />
          <div className="card-body">
            <h3 className="card-title">Primera Fila</h3>
            <p className="card-text">
            UX design and programming of the e-commerce site for Primera Fila, created using HTML, CSS, and JavaScript, all integrated into the CMS Audience View.
            </p>
            <a href="https://www.behance.net/gallery/172896245/Primera-Fila-Cine-Colombia" className="buton-diego">
            <FaBehance /> Visit project
            </a>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={pro3} alt="Card image" />
          <div className="card-body">
            <h3 className="card-title">Design and coding of a Smart TV App</h3>
            <p className="card-text">
              Smart TV app for the TV channel Canal RCN. This app was done in
              React for the frontend and Node.js for the backend, using HTML, CSS,
              JS, JSX, and Node.js.
            </p>
            <a href="https://www.behance.net/gallery/172957505/Ventas-internacionales-RCN" className="buton-diego">
            <FaBehance /> Visit project
            </a>
          </div>
        </div>



        <div className="card">
          <img className="card-img" src={pro4} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Morning Routine Web App</h3>
            <p className="card-text">
            Web app designed to help users estimate the time needed to get ready in the morning. Users can select the activities they want to perform. done using HTML, CSS, and JavaScript.
            </p>
            <a href="http://127.0.0.1:5500/index.html?" className="buton-diego">
            <SiJavascript /> Visit Project
            </a>
          </div>
        </div>


        <div className="card">
          <img className="card-img" src={pro5} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">CSS/JSS Vending Machine</h3>
            <p className="card-text">
            A vending machine implemented in JavaScript using the DOM to control animations in CSS.
            </p>
            <a href="http://127.0.0.1:5502/index.html" className="buton-diego">
            <SiJavascript /> Visit project
            </a>
          </div>
        </div>


        <div className="card">
          <img className="card-img" src={pro6} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Holidays APIs</h3>
            <p className="card-text">
            A web app that displays national holidays from different countries around the world for a specific year, along with their respective dates. The app then searches for a brief description of each holiday on Wikipedia, implemented using Node.js.
            </p>
            <a href="http://localhost:8000/" className="buton-diego">
            <FaNodeJs /> Visit Project
            </a>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={pro7} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Medical Procedures App</h3>
            <p className="card-text">
            A Medical Procedures App designed to help users find medical procedures available in other countries. The app is developed using C# and ASP.NET.
            </p>
            <a href="https://github.com/diegoarivera35/MedLinked" className="buton-diego">
            <FaGithub /> Visit Repo
            </a>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={pro8} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Paying with PHP</h3>
            <p className="card-text">
            A web app that utilizes a dataset of vehicles to display detailed information about them, developed using PHP and SQL.
            </p>
            <a href="http://phpdatabase.great-site.net/index.php" className="buton-diego">
            <FaPhp /> Visit Project
            </a>
          </div>
        </div>


      </section>
    </div>
  );
};

export default Projects;
