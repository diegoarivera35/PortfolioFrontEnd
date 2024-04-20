import logo from '../assets/Logo_personal.svg';

const Header = () => {

    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light">
  

<div className="logo"><a href="index.html"><img src={logo} alt="logo"/></a></div>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#About">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Skills">Skills</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="#Projects">Projects</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact Me</a>
      </li>




    </ul>
  </div>
</nav>
</>
  );
};

export default Header;