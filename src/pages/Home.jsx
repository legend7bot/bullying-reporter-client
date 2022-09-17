import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
function Home() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home