import { useRef , useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

// icon
import { FaPhoneAlt , FaEnvelope ,FaLinkedin } from "react-icons/fa";
// css
import "./Contact.css";
import { useTranslation } from "react-i18next";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const {t} = useTranslation();
    const form = useRef();
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const [showMessage , setShowMessage] = useState(false);
    const [message , setMessage] = useState({
        title: "",
        messageText : ""
    });
    const [errors, setErrors] = useState({}); // لتخزين الأخطاء
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: '',
    });
    const validate = () => {
      const newErrors = {};
      if (!formData.user_name.trim()) newErrors.user_name = 'Name is required.';
      if (!formData.user_email.trim()) {
        newErrors.user_email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
        newErrors.user_email = 'Invalid email format.';
      }
      if (!formData.message.trim()) newErrors.message = 'Message is required.';
      return newErrors;
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // إذا وجدت أخطاء، قم بعرضها
      return;
    }

    emailjs
      .sendForm('service_o5yvfpp', 'template_vspez1y', form.current, {
        publicKey: 'aCRF0123oKItpfaBO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage({
            title: "SUCCESS!",
            messageText : "I will tell you for 24h"
          });
          setShowMessage(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage({
            title: "FAILED...",
            messageText : "try contact me later again"
          });
          setShowMessage(true);
        },
      );
  };
  return (
    <section className='contact' id='contact' data-aos="zoom-in" data-aos-duration="3000">
        <Container>
            <Row>
                <Col>
                    <h3 className='contact-title'>{t("Contact Me")}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className='contact-items'>
                        <li className='contact-item'>
                            <span><FaPhoneAlt /></span>
                            <a className='contact-link' href="https://wa.me/qr/MY7F4EJJLOCAO1" target="_blank">+20 01221342750</a>
                        </li>
                        <li className='contact-item'>
                            <span><FaEnvelope  /></span>
                            <a className='contact-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=snada8187@gmail.com" target="_blank">nadasamyali14@gmail.com</a>
                        </li>
                        <li className='contact-item'>
                            <span><FaLinkedin  /></span>
                            <a className='contact-link' href="https://www.linkedin.com/in/nada-samy-86aba91b9/" target="_blank">linkedin.com/in/nada-samy</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='input-div'>
                            <label htmlFor="name" style={{display: "flex" , alignItems: "center"}}>{t("form.name")} {errors.user_name && <span className="error-span">*</span>}</label>
                            <input type="text" value={formData.user_name}
                              onChange={handleInputChange} name="user_name" placeholder={t("form.name")} id='name'/>  
                             {errors.user_name && <p className="error">{errors.user_name}</p>}
                        </div>
                        <div className='input-div'>
                            <label htmlFor="email" style={{display: "flex" , alignItems: "center"}}>{t("form.email")} {errors.user_email && <span className="error-span">*</span>}</label>
                            <input type="email" value={formData.user_email} onChange={handleInputChange} name="user_email" placeholder={t("form.email")} id='email'/>
                            {errors.user_email && <p className="error">{errors.user_email}</p>}
                        </div>
                        <div className='input-div'>
                            <label htmlFor="message" style={{display: "flex" , alignItems: "center"}}>{t("form.message")} {errors.message && <span className="error-span">*</span>}</label>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} id="message" cols={30} rows={10} />
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <div className='button-div'>
                            <button>{t("form.sendMessage")}</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
        <Modal
        show={showMessage}
        onHide={() => setShowMessage(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            {message.title}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <p>{message.messageText}</p>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Contact;