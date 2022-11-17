import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Търговия с вторични суровини</h1>

        <a href="#about" className="btn-get-started scrollto">
          Повече
        </a>
      </div>
    </section>
  );
}
