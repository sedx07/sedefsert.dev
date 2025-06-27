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
          alert('Mesaj başarıyla gönderildi!');
          form.current.reset();
        },
        (error) => {
          alert('Gönderimde hata oluştu!');
        }
      );
  };

  return (
    <section className="contact">
      <h2>İletişim</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Adınız" required />
        <input type="email" name="user_email" placeholder="E-posta" required />
        <textarea name="message" placeholder="Mesajınız" required />
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
};

export default Contact;
