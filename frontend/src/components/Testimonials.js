import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';


export const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper('.testimonials-slider', {
      modules: [Navigation, Pagination],
      speed: 300,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
     
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" data-aos="fade-right">
              <h2>Отзиви</h2>
              <p>
                В тази секция може да прочетете какво мислят наши клиенти за
                нас.
              </p>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonials-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Много добре свършена работа
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Васко Жабата</h3>
                    <h4>музикант</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Много як сайт
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Цеца Мецата</h3>
                    <h4>певица</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Евалата
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Стефка G</h3>
                    <h4>Учител</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      УСССССС!!!!
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>FYRE</h3>
                    <h4>певец</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Програмиста дет го е правил е велик.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Момока</h3>
                    <h4>бийтмейкър</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
