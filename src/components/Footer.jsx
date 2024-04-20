import logo from '../assets/Logo_personal.svg';
import Recurso1 from '../assets/Recurso1.svg';
import Recurso2 from '../assets/Recurso2.svg';
import Recurso3 from '../assets/Recurso3.svg';

const Footer = () => {

    return (
      <div className="centrar">
    
    
    
    <footer>
<div className="main">
  <div className="footer_section">
    <a href="#"><img src={logo} alt="logo" /></a>
  </div>
  <div className="footer_section">
    <ul>
      <li className="footer_link"><a href="#anchor_about">About me</a></li>
      <li className="footer_link"><a href="#anchor_skills">Skills</a></li>
      <li className="footer_link"><a href="#anchor_projects">Projects</a></li>
      <li className="footer_link"><a href="#anchor_contact">Contact</a></li>
    </ul>
  </div>
  <div className="footer_section">
    <a href="" className="social_media"
      ><img src={Recurso1} alt="facebook"
    /></a>
    <a href="" className="social_media"
      ><img src={Recurso2} alt="instagram"
    /></a>
    <a href="" className="social_media"
      ><img src={Recurso3} alt="youtube"
    /></a>
  </div>
</div>
<div className="copyright">
  <p>
    © Copyright 2023, All Rights Reserved by Diego Alexander Rivera Acosta
  </p>
</div>
</footer>


</div>
  );
};

export default Footer;
