import React from 'react';

function BlogsCard(props) {
  return (
    <div className="col-md-4">
      <div className="card border-0 mb-4">
        <img
          src={props.img}
          alt="img"
          className="card-img-top w-100"
        />
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
          <p>{props.description}</p>
          <a
            href={props.url}
            className="small text-muted">
            Go To The Article
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
