import React from 'react'

function About() {
  return (
    <>
        <section className="section" id="about">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-6 pr-md-5 mb-4 mb-md-0">
                    <h6 className="section-title mb-0">About Company</h6>
                    <h6 className="section-subtitle mb-4">Architecto provident deserunt</h6>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestiae temporibus et tenetur unde quasi, cum nemo quo, molestias architecto alias voluptatibus corrupti corporis earum. Necessitatibus maxime modi ipsam, quod!</p>
                    <img src="src\assets\imgs\about.jpg" alt="" className="w-100 mt-3 shadow-sm"/>
                </div>
                <div className="col-md-6 pl-md-5">
                    <div className="row">
                        <div className="col-6">
                            <img src="src\assets\imgs\about-1.jpg" alt="" className="w-100 shadow-sm"/>
                        </div>
                        <div className="col-6">
                            <img src="src\assets\imgs\about-2.jpg" alt="" className="w-100 shadow-sm"/>
                        </div>
                        <div className="col-12 mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto quidem laborum atque, sapiente ipsa excepturi fuga cum sed in assumenda eos quasi harum culpa laboriosam nulla, incidunt quae. Voluptatum.</p>
                            <p><b>Aliquid fuga sunt velit, temporibus molestias ab. Ipsa nesciunt totam, aliquid dignissimos.</b><br/>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut a dolorem, consectetur, eos suscipit consequatur magnam est dolore obcaecati adipisci expedita, vero, iste ducimus qui numquam animi facilis officia?</p>
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    </section>
    </>
  )
}

export default About