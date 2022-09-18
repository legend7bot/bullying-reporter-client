import React from 'react';
import TestemonyCard from './elements/TestemonyCard';

function Testemony() {
  return (
    <>
      <section
        className="section"
        id="testmonial">
        <div className="container">
          <h6 className="section-title text-center mb-0">Testmonials</h6>
          <h6 className="section-subtitle mb-5 text-center">What Our Respected.. Says</h6>
          <div className="row">
            <TestemonyCard
              img=""
              name="John"
              position="CEO"
              description="Hey there"
            />
            <TestemonyCard
              img=""
              name="John"
              position="CEO"
              description="Hey there"
            />
            <TestemonyCard
              img=""
              name="John"
              position="CEO"
              description="Hey there"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testemony;
