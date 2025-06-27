import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../css/pages/contact/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          alert('succeses!');
          form.current.reset();
        },
        (error) => {
          alert('fail!');
        }
      );
  };

  return (
    <section className="contact">
      <h2>contact me</h2>
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
