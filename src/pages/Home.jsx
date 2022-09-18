import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import About from '../components/About'
import Blogs from '../components/Blogs'
import Testemony from '../components/Testemony'
import Footer from '../components/Footer'


function Home() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <Navbar/>
        <Header/>
        <Services/>
        <About/>
        <Blogs/>
        <Testemony/>
        <Footer/>
    </div>
  )
}

export default Home