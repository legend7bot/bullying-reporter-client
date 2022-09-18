import React from 'react';
import BlogsCard from './elements/BlogsCard';

function Blogs() {
  return (
    <>
      <section
        className="section"
        id="blog">
        <div className="container">
          <h6 className="section-title mb-0 text-center">Awareness Articles</h6>
          <h6 className="section-subtitle mb-5 text-center">Awareness for Bullying</h6>

          <div className="row">

            <BlogsCard
              img=""
              title="Title-1"
              description="Description-1"
              url=""
            />
            <BlogsCard
              img=""
              title="Title-3"
              description="Description-3"
              url=""
            />
            <BlogsCard
              img=""
              title="Title-3"
              description="Description-3"
              url=""
            />

          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
