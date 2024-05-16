// import logo from '../assets/Logo_personal.svg';
import { FaInfoCircle } from "react-icons/fa";
import { IoIosHammer } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };


    return (
      <>

<nav   className="navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
  

{/* <div   className="logo"><a href="index.html"><img src={logo} alt="logo"/></a></div> */}
<a className="navbar-brand" href="#">diegoarivera35.com</a>
  <button   className="navbar-toggler" type="button" onClick={toggleNavbar}>
    <span   className="navbar-toggler-icon"></span>
  </button>

  <div   className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
    <ul   className="navbar-nav mr-auto">
      <li   className="nav-item active">
        <a   className="nav-link" href="#"><FaInfoCircle   className='iconMenu'/> About</a>
      </li>
      <li   className="nav-item">
        <a   className="nav-link" href="#anchor_skills"><IoIosHammer   className='iconMenu'/> Skills</a>
      </li>


      <li   className="nav-item">
        <a   className="nav-link" href="#anchor_projects"><FaGitAlt   className='iconMenu'/> Projects</a>
      </li>


      <li   className="nav-item">
        <a   className="nav-link" href="#anchor_education"><FaBookOpen   className='iconMenu'/> Education</a>
      </li>



      <li   className="nav-item">
        <a   className="nav-link" href="#anchor_contact"><FaMessage   className='iconMenu'/> Contact Me</a>
      </li>




    </ul>
  </div>
</nav>


</>
  );
};

export default Header;