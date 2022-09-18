import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
function Report() {
  return (
    <>
      <div className="report-body">
      <h1 className='report-heading'>COMPLAINT DETAILS</h1>
        <div className="main-report">
        <form>
          <div className="row report-form">
            <label htmlFor="name" className='col-5 report-label' >name <span className="required-start">*</span> </label>
          <input type="text" name='name'  className='col-7 form-control report-form-fields' placeholder='Your name'/>
          <br />
          <label htmlFor="email" className='col-5 report-label' >email <span className="required-start">*</span> </label>
          <input type="email" name='email'  className='col-7 form-control report-form-fields' placeholder='Your email'/>
          <br />
          <label htmlFor="contact" className='col-5 report-label' >contact <span className="required-start">*</span> </label>
          <input type="contact" name='contact'  className='col-7 form-control report-form-fields' placeholder='Your contact no.'/>
          <br />
          <label htmlFor="location" className='col-5 report-label' >location <span className="required-start">*</span> </label>
          <input type="location" name='location'  className='col-7 form-control report-form-fields' placeholder='The location of bullying'/>
          <br />
          <label htmlFor="description" className='col-5 report-label' >description <span className="required-start">*</span> </label>
          <textarea name='description' className='col-7 form-control report-form-fields' placeholder='Description' rows={4} />
          <br />
          <label htmlFor="accusedDetails" className='col-5 report-label' >Accused Details <span className="required-start">*</span> </label>
          <textarea name='accusedDetails' className='col-7 form-control report-form-fields' placeholder='Details of the person accused' rows={3} />
          <br />
          </div>
          <a href="/">
<Button variant="outlined" startIcon={<ArrowBackIosIcon/>} >
            Home Page
          </Button>
          </a>
          
          <Button variant="contained" endIcon={<NavigateNextIcon/>} sx={{position:"absolute",right:"19%"}}>
            Send
          </Button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Report