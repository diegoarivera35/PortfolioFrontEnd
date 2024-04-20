import photo from '../assets/photo_diego.png';

const Header = () => {

    return (
      <div className="centrar" id="about">
    <img className="card-img" src={photo} alt="Card image cap" />
    <h2>About Me</h2>
<p>Web Designer with 8+ years of experience, combining strong design skills with advanced knowledge in UX/UI and digital marketing. Graduated from Los Andes University, currently pursuing Web Development at Humber College, Toronto. Experienced in leading web projects, content management, and optimizing websites for SEO. Bilingual in Spanish and English.</p>
</div>
  );
};

export default Header;