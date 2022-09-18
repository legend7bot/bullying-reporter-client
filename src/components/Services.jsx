import React from 'react';
import MainArticle from './elements/MainArticle';

function Services() {
  return (
    <section
      id="service"
      className="section pt-0">
      <div className="container">
        <h6 className="section-title text-center">Bullying</h6>
        <h6 className="section-subtitle text-center mb-5 pb-3">........</h6>

        <div className="row">
          <MainArticle
            index="1"
            title="How parents, teachers, and kids can take action to prevent bullying"
            description="Preventing and stopping bullying involves a commitment to creating a safe environment where children can thrive without being afraid."
          />
          <MainArticle
            index="2"
            title="Cyberbullying: What is it and how can you stop it?"
            description="Explore the latest psychological science about the impact of cyberbullying and what to do if you or your child is a victim."
          />
          <MainArticle
            index="3"
            title="Stop office bullying"
            description="Bullying in the workplace can lead to increased absenteeism, employee turnover, even lawsuits. Here’s how employers can reduce aggressive behavior among employees."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
