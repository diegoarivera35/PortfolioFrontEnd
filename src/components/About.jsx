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


<p>I am a Web Developer and Cybersecurity Professional, skilled in building secure full-stack applications and bridging the gap between development and security. With postgraduate studies in Web Development (Humber College) and Cyber Security Operations (York University), I bring a mix of technical expertise and creative problem-solving to every project.<span id="dots">{!isExpanded && "..."}</span></p>

<div id='more' style={{ maxHeight: isExpanded ? "500px" : "0px", overflow: 'hidden', transition: 'max-height 2s ease-in-out' }}>

<p>I strengthened my Canadian industry experience through an internship at Virtual POCT, a Toronto-based healthcare company, where I contributed to the implementation of FHIR standards while applying both my web development and cybersecurity expertise.</p>

<p>
  My technical skills include JavaScript, React, Node.js, Python, FastAPI, SQL, and MongoDB. I have experience designing and deploying full-stack applications, securing systems against vulnerabilities, and optimizing performance (my portfolio itself is hosted on Vercel).</p>

<p>Bilingual in Spanish and English, and currently improving my French, I bring versatility, adaptability, and a strong security-focused mindset to support innovative and resilient digital solutions.</p>
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