import React from 'react'

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>ПЛАМ ЕООД - гр. Две могили е създадена през 2007 г.</h2>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p>
              Лидер в изкупуването на вторични суровини в гр. Две могили и един
              от основните за обл. Русе.
            </p>
            <ul>
              <h3>Изкупуване на:</h3>
              <li>
                <i className="ri-check-double-line"></i> Черни и цветни метали;
              </li>
              <li>
                <i className="ri-check-double-line"></i> Акумулаторен скрап
              </li>
              <li>
                <i className="ri-check-double-line"></i> Излезли от употреба МПС
              </li>
            </ul>
            <p className="fst-italic">
              - ​Издаваме нужният документ за дерегистрация в КАТ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
