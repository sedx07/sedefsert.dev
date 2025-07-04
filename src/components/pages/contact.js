import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../css/pages/contact/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tvjamrc', 'template_r2flr06', form.current, 'EY0Y5ZP9Ib_0Lt6C8')
      .then(
        (result) => {
          alert('message sent!');
          form.current.reset();
        },
        (error) => {
          alert('message fail! try again.');
        }
      );
  };

  return (
    <section className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="name" required />
        <input type="text" name="user_surname" placeholder="surname" required />
        <input type="email" name="user_email" placeholder="e-mail" required />
        <textarea name="message" placeholder="your message" required />
        <button type="submit">send</button>
      </form>
    </section>
  );
};

export default Contact;
