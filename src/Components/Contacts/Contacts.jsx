import React from 'react'
import './Contacts.css';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";

// email js
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8az6edr', 'template_25Ijvhf', form.current, 'kRt7fToSkyUqreNog')
      .then((result) => {
          console.log(result.text);
      }, (error) => {  
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
              <article className='contact_option'>
                 <MdOutlineMarkEmailUnread className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>pawanb78@gmail.com</h5>
                  <a href="mailto:pawanb78@gmail.com" target='_blank'>Send a message</a>
              </article>
              <article className='contact_option'>
                  <RiMessengerLine className='contact_option-icon'/>
                  <h4>Messenger</h4>
                  <h5>Pawan Bhandari</h5>
                  <a href="https://m.me/pawan.bhandari.3133/" target='_blank'>Send a message</a>
              </article>
              <article className='contact_option'>
                  <FaWhatsapp className='contact_option-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>Phone Number</h5>
                  <a href="https://api.whatsapp.com/send?phone=+447780145870" target='_blank'>Send a message</a>
              </article>
          </div>
          {/* start of form */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contacts