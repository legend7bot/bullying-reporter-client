import React from 'react'

function Testemony() {
  return (
    <>
        <section className="section" id="testmonial">
        <div className="container">
            <h6 className="section-title text-center mb-0">Testmonials</h6>
            <h6 className="section-subtitle mb-5 text-center">What Our Clients Says</h6>
            <div className="row">
                <div className="col-md-4 my-3 my-md-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="media align-items-center mb-3">
                                <img className="mr-3" src="src\assets\imgs\avatar.jpg" alt="" />
                                <div className="media-body">
                                    <h6 className="mt-1 mb-0">John Doe</h6>
                                    <small className="text-muted mb-0">Business Analyst</small>     
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3 my-md-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="media align-items-center mb-3">
                                <img className="mr-3" src="src\assets\imgs\avatar-1.jpg" alt="" />
                                <div className="media-body">
                                    <h6 className="mt-1 mb-0">Maria Garcia</h6>
                                    <small className="text-muted mb-0">Insurance Agent</small>      
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3 my-md-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="media align-items-center mb-3">
                                <img className="mr-3" src="src\assets\imgs\avatar-2.jpg" alt="" />
                                <div className="media-body">
                                    <h6 className="mt-1 mb-0">Mason Miller</h6>
                                    <small className="text-muted mb-0">Residential Appraiser</small>        
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testemony