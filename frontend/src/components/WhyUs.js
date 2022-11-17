import React from 'react';
import './WhyUs.css';

export const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex align-items-stretch"
            data-aos="fade-right"
          >
            <div className="content">
              <h3 className="coolor">Защо да изберете нас?</h3>
              <p>
                Фирмата разполага със собствен лицензиран транспорт, което ни
                предоставя възможност за широка гама от услуги в полза на
                клиентите ни.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bi bi-truck-flatbed"></i>
                    <h4> Камиони</h4>
                    <p>
                      На наше разположение имаме тежкотоварни камиони -
                      мултилифт и лекотоварни камиони - мултилифт и закрит
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bi bi-truck-flatbed"></i>
                    <h4>Трактори</h4>
                    <p>Разполагаме с трактор - челен товарач </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bi bi-box-seam-fill"></i>
                    <h4>Мотокари</h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
