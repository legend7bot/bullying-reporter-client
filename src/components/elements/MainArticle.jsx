import React from 'react';

function MainArticle(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <small className="text-primary font-weight-bold">{props.index}</small>
          <h5 className="card-title mt-3">
            {' '}
            {props.title}{' '}
          </h5>
          <p className="mb-0">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainArticle;
