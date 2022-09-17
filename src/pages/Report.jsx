import React from 'react'

function Report() {
  return (
    <>
      <div className="report-body">
        <div className="main-report">
        <form>
          <label htmlFor="name">name</label>
          <input type="text" name='name' />
          <br />
          <label htmlFor="email">email</label>
          <input type="email" name='email' />
          <br />
          <label htmlFor="contact">contact</label>
          <input type="contact" name='contact' />
          <br />
          <label htmlFor="location">location</label>
          <input type="location" name='location' />
          <br />
          <label htmlFor="description">description</label>
          <textarea name='description'/>
          <br />
          <label htmlFor="accusedDetails">Accused Details</label>
          <textarea name='accusedDetails'/>
          <br />
        </form>
        </div>
      </div>
    </>
  )
}

export default Report