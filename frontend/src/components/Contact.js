import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'scdhGRP8ZHHZ7VsPB'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      handleClick();
  };
   const handleClick = () => {
     // 👇️ clear input value
     setName('');
     setEmail('')
     setTheme('');
     setMessage('');
   };


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="section-title">
              <h2>Контакти</h2>
              <p>ИМАТЕ ВЪПРОСИ?</p>
              <p> ​СВЪРЖЕТЕ СЕ С НАС.</p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <iframe
              style={{ border: 0 }}
              width="725"
              height="240"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0347042378853!2d25.86451511572135!3d43.58499346485615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aeefdb98ec7267%3A0x721d9433a4b19e09!2z0JLQotCe0KDQmNCn0J3QmCDQodCj0KDQntCS0JjQndCYINCf0JvQkNCc!5e0!3m2!1sbg!2sbg!4v1661364083798!5m2!1sbg!2sbg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="info mt-4">
              <i className="bi bi-geo-alt"></i>
              <h4>Местоположение:</h4>
              <p>ВТОРИЧНИ СУРОВИНИ ПЛАМ:</p>
              <p>7150, гр. Две могили, бул. "България" №132Б</p>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="info">
                  <i className="bi bi-envelope"></i>
                  <h4>Имейли:</h4>
                  <p>E-mail: penchevp@mail.bg</p>
                  <p> E-mail: plameood@mail.bg</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info w-100 mt-4">
                  <i className="bi bi-phone"></i>
                  <h4>Телефони:</h4>
                  <p>GSM: 087 715 4227</p>
                  <p>GSM: 089 553 3945</p>
                </div>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              role="form"
              className="php-email-form mt-4"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"
                    id="name"
                    placeholder="Вашите имена"
                    value={name}
                    onChange={handleChangeName}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="from_email"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Вашият имейл адрес"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={theme}
                  onChange={handleChangeTheme}
                  placeholder="Тема"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleChangeMessage}
                  placeholder="Съобщение"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Изчакване</div>
                <div className="error-message"></div>
                <div className="sent-message">Съобщението Ви е изпратено!</div>
              </div>
              <div className="text-center">
                <button type="submit" >
                  Изпрати съобщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
