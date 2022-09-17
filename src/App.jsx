import React from 'react'
import Home from './pages/Home'
import Report from './pages/Report';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route  path="/*" element={"error 404 page not found sowwy"} />
      </Routes>
    </>
  )
}

export default App