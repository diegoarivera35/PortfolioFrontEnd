import photo from '../assets/photoDiegoPixelated.png';
import DownloadPDF from "./DownloadPDF";
import "../styles/App.css";
const Header = () => {

    return (
      <div className="centrar" id="about">




<div className='biography'>

    <img className="card-img" src={photo} alt="Card image cap" />




<div className='aboutmetext'>

    <div className="mitad">
  <h2 className="htmlTitle">
    <span className="izquierdo">&lt;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
    About Me
    <span className="izquierdo">&lt;&frasl;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
  </h2>
</div>


<p>Web Designer with 8+ years of experience, combining strong design skills with advanced knowledge in UX/UI and digital marketing. Graduated from Los Andes University, currently pursuing Web Development at Humber College, Toronto. Experienced in leading web projects, content management, and optimizing websites for SEO. Bilingual in Spanish and English.</p>

<DownloadPDF/>

</div>




</div>
</div>
  );
};

export default Header;