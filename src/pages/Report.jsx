import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { createReport } from '../features/report/reportSlice';

function Report() {
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    description: '',
    accusedDetails: '',
  });

  const dispatch = useDispatch();

  function handelChange(event) {
    const { name, value } = event.target;
    setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createReport(data));
    console.log(data);
  }

  return (
    <>
      <div className="report-body">
        <h1 className="report-heading">COMPLAINT DETAILS</h1>
        <div className="main-report">
          <form>
            <div className="row report-form">
              <label
                htmlFor="name"
                className="col-5 report-label">
                name <span className="required-start">*</span>{' '}
              </label>
              <input
                type="text"
                name="name"
                className="col-7 form-control report-form-fields"
                placeholder="Your name"
                onChange={handelChange}
              />
              <br />
              <label
                htmlFor="email"
                className="col-5 report-label">
                email <span className="required-start">*</span>{' '}
              </label>
              <input
                type="email"
                name="email"
                className="col-7 form-control report-form-fields"
                placeholder="Your email"
                onChange={handelChange}
              />
              <br />
              <label
                htmlFor="contact"
                className="col-5 report-label">
                contact <span className="required-start">*</span>{' '}
              </label>
              <input
                type="contact"
                name="contact"
                className="col-7 form-control report-form-fields"
                placeholder="Your contact no."
                onChange={handelChange}
              />
              <br />
              <label
                htmlFor="location"
                className="col-5 report-label">
                location <span className="required-start">*</span>{' '}
              </label>
              <input
                type="location"
                name="location"
                className="col-7 form-control report-form-fields"
                placeholder="The location of bullying"
                onChange={handelChange}
              />
              <br />
              <label
                htmlFor="description"
                className="col-5 report-label">
                description <span className="required-start">*</span>{' '}
              </label>
              <textarea
                name="description"
                className="col-7 form-control report-form-fields"
                placeholder="Description"
                rows={4}
                onChange={handelChange}
              />
              <br />
              <label
                htmlFor="accusedDetails"
                className="col-5 report-label">
                Accused Details <span className="required-start">*</span>{' '}
              </label>
              <textarea
                name="accusedDetails"
                className="col-7 form-control report-form-fields"
                placeholder="Details of the person accused"
                rows={3}
                onChange={handelChange}
              />
              <br />
            </div>
            <a href="/">
              <Button
                variant="outlined"
                startIcon={<ArrowBackIosIcon />}>
                Home Page
              </Button>
            </a>

            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              sx={{ position: 'absolute', right: '19%' }}
              onClick={handleSubmit}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Report;
