import React from 'react';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ReportCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/report/${props.id}`);
  };
  return (
    <>
      <div
        className="card"
        style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">
            {props.name}
            {props.statusResolved ? (
              <TripOriginIcon
                fontSize="small"
                sx={{ margin: '0 0 4px 10px', fontSize: '1rem', color: 'green' }}
              />
            ) : (
              <TripOriginIcon
                fontSize="small"
                sx={{ margin: '0 0 4px 10px', fontSize: '1rem', color: 'red' }}
              />
            )}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
          <p className="card-text">{props.description.slice(0, 100) + '...'}</p>
          <h6 className="dull">Status : {props.status}</h6>
          <Button
            variant="outlined"
            onClick={handleClick}>
            Show More
          </Button>
        </div>
      </div>
    </>
  );
}

export default ReportCard;
