import React from 'react';

function TestemonyCard(props) {
  return (
    <div className="col-md-4 my-3 my-md-0">
      <div className="card">
        <div className="card-body">
          <div className="media align-items-center mb-3">
            <img
              className="mr-3"
              src={props.img}
              alt=""
            />
            <div className="media-body">
              <h6 className="mt-1 mb-0">{props.name}</h6>
              <small className="text-muted mb-0">{props.position}</small>
            </div>
          </div>
          <p className="mb-0">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestemonyCard;
