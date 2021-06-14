import Form from '../Form/Form';

import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="contact-wrapper">
          <h2 className="contact-title">Остались вопросы?</h2>
          <div className="contact-description">
            Оставьте номер телефона, и мы перезвоним вам
          </div>

          <Form />

          <div className="contact-personal">
            Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;