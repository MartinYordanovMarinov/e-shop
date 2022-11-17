import React, { useState, useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';

export const Counts = () => {
  
  useEffect(() => {
    if (performance.navigation.type === 1) {
     const pure = new PureCounter();
    }
    else{
      const pure = new PureCounter();
    }
  });
  
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="1000"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Доволни клиенти</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="20"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Превозни средства</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="15"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Години опит</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="15"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Служители</p>
          </div>
        </div>
      </div>
    </section>
  );
};
