import React from 'react'

function Footer() {
  return (
    <>
        <section id="contact" className="section" style={{margin:"0", padding:0 , color:"white", backgroundColor:"black"}}>
        <footer className="py-4 border-top border-secondary" style={{textAlign:"center"}}>
                <p className="mb-0 small">&copy; {new Date().getFullYear()} LeadMark Created By Noobies All rights reserved </p>     
        </footer>
        </section>
    </>
  )
}

export default Footer