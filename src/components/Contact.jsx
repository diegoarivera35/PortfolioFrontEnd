import qrcode from '../assets/whatsapp.svg';


const Contact = () => {
  return (
    <div className='centrar' id='Contact'>
      <h2 id="">Message Me!</h2>
      <div className="qrcode">
          <img src={qrcode} alt="qrcode" />
        </div>
    </div>
  );
};

export default Contact;
