// import qrcode from '../assets/whatsapp.svg';
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
// import { BsWhatsapp } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='centrar' id='anchor_contact'>







      <div className="centrar mt-5">
  <h2 className="htmlTitle">
    <span className="izquierdo">&lt;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
    Contact Me!
    <span className="izquierdo">&lt;&frasl;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
  </h2>
</div>








      <div className='personalInfo mt-5'>


      <div className='pInfo'><FaLocationDot /> <strong>Location:</strong> Toronto, ON Canada</div>


      <div className='pInfo'><FaPhoneFlip /> <strong>Phone:</strong> +1 437 553 4536</div>

      <div className='pInfo'><MdEmail /> <strong>Email:</strong> <a href='diegoarivera35@gmail.com' target='_blank'>diegoarivera35@gmail.com</a></div>

      <div className='pInfo'><FaGithub /> <strong>Github:</strong> <a href='https://github.com/diegoarivera35' target='_blank'>https://github.com/diegoarivera35</a></div>

      <div className='pInfo'><ImBehance2 /> <strong>Behance:</strong> <a href='https://www.behance.net/diegoarivera35' target='_blank'>https://www.behance.net/diegoarivera35</a></div>

      {/* <div className="qrcode">
      <div className='pInfo'>
        <BsWhatsapp /> Whatsapp:
      </div>

          <img src={qrcode} alt="qrcode" />
        </div> */}
      </div>






    </div>
  );
};

export default Contact;
