import React from 'react';

export const LittleStore = () => {

  
  return (
    <section id="portfolio" className="portfolio">
      <script src="assets/js/main.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
     
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <div className="container">
        <div className="section-title" data-aos="fade-left">
          <h2>Магазин ПЛАМ</h2>
          <p>
            <strong>Създаден през 2015 г.</strong>
            Като част от дружеството, Магазин ПЛАМ до ден днешен обслужва
            предимно сферата на селскостопанската техника, като изработва и
            ремонтира хидравлични маркучи, предоставя масла, консумативи и
            всичко необходимо на конкурентни цени.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                Всички
              </li>
              <li data-filter=".filter-app">Електроинструменти</li>
              <li data-filter=".filter-card">Авто консумативи</li>
              <li data-filter=".filter-web">Ръчни инструменти</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/KABEL.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Кабел</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/KABEL.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/hammer.jpeg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Чук</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/hammer.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/circulqr.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Циркуляр</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/circulqr.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/МАСЛО.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Моторно масло</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/МАСЛО.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/kle.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Клещи</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/kle.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/kos.jpeg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Косачка</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/kos.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/СПРЕЙ.jpeg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Спрей за табло</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/СПРЕЙ.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/ch.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Чистачки</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/ch.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/screw1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Отверка</h4>

                <div className="portfolio-links">
                  <a
                    href="assets/img/screw1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title=""
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
