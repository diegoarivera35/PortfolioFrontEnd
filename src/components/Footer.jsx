// import logo from '../assets/Logo_personal.svg'
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {

    return (

    
    
    
    <footer>
<div className="main">
  {/* <div className="footer_section">
    <a href="#"><img src={logo} alt="logo" /></a>
  </div> */}
  <div className="footer_section">
    <ul>
      <li className="footer_link"><a href="#">About me</a></li>
      <li className="footer_link"><a href="#anchor_skills">Skills</a></li>
      <li className="footer_link"><a href="#anchor_projects">Projects</a></li>
      <li className="footer_link"><a href="#anchor_education">Education</a></li>
      <li className="footer_link"><a href="#anchor_contact">Contact</a></li>
    </ul>
  </div>
  <div className="footer_section">
    <a href="https://www.linkedin.com/in/diegoarivera35/" target="_blank" className="social_media"
      ><div className="Icono"><CiLinkedin/></div> LinkedIn</a>
  </div>
</div>
<div className="copyright">
  <p>
  © Copyright 2024, All Rights Reserved by Diego Alexander Rivera Acosta
  </p>
</div>
</footer>



  );
};

export default Footer;
