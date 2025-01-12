import { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// icon
import { FaPhoneAlt , FaEnvelope ,FaLinkedin } from "react-icons/fa";
// css
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const {t} = useTranslation();
    const form = useRef();
    const [showMessage , setShowMessage] = useState(false);
    const [message , setMessage] = useState({
        title: "",
        messageText : ""
    });
  const sendEmail = (e) => {
    e.preventDefault();

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
    <section className='contact' id='contact'>
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
                            <label htmlFor="name">{t("form.name")}</label>
                            <input type="text" name="user_name" placeholder={t("form.name")} id='name'/>
                        </div>
                        <div className='input-div'>
                            <label htmlFor="email">{t("form.email")}</label>
                            <input type="email" name="user_email" placeholder={t("form.email")} id='email'/>
                        </div>
                        <div className='input-div'>
                            <label htmlFor="message">{t("form.message")}</label>
                            <textarea name="message" id="message" cols={30} rows={10} />
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