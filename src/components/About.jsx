import photo from '../assets/photoDiegoPixelated.png';
import DownloadPDF from "./DownloadPDF";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "../styles/App.css";
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function myFunction() {
    setIsExpanded(!isExpanded);  // Toggle between expanded and collapsed
}

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


<p>Web Developer with 8+ years of experience, combining strong design skills with advanced knowledge in UX/UI and digital marketing. Graduated from Los Andes University, currently pursuing Web Development at Humber College, Toronto. Experienced in leading web projects, content management, and optimizing websites for SEO. Bilingual in Spanish and English.<span id="dots">{!isExpanded && "..."}</span></p>

<div id='more' style={{ maxHeight: isExpanded ? "500px" : "0px", overflow: 'hidden', transition: 'max-height 2s ease-in-out' }}>

<p>This portfolio showcases some of my skills as a Web Developer and UX/UI Designer. You will find projects utilizing JavaScript, the DOM, PHP, APIs, and designs created in Figma, among other tools.</p>

<p>
 This portfolio website itself is a web App, featuring a front-end built with React and a back-end developed with Node.js and Express.js. The projects database is stored in a MongoDB and are rendered on the front end using a REST API. Finally, the portfolio is deployed using AWS Cloud services.</p>
</div>

<button onClick={myFunction} id="moreBtn">
{isExpanded ? "Read less " : "Read more "}
{isExpanded ? <BsChevronUp /> : <BsChevronDown />}
</button>
<DownloadPDF/>

</div>




</div>
</div>
  );
};

export default Header;