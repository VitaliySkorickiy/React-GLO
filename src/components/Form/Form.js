import Button from '../Button/Button';

import './Form.css'

const Form = () => {
  return (
    <form action="../mailer.smart.php" className="contact-form">

      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Телефон" />
      <input type="email" placeholder="E-mail" />

      <Button />

    </form>
  );
}

export default Form;
