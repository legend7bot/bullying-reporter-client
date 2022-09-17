import React from 'react'

function Blogs() {
    return (
        <>
            <section className="section" id="blog">
                <div className="container">
                    <h6 className="section-title mb-0 text-center">Latest Articles</h6>
                    <h6 className="section-subtitle mb-5 text-center">Architecto provident deserunt eveniet libero</h6>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0 mb-4">
                                <img src="src\assets\imgs\blog-1.jpg" alt="" className="card-img-top w-100" />
                                <div className="card-body">
                                    <h6 className="card-title">Pariatur Omnis Harum quae sint.</h6>
                                    <p>Fuga quae ratione inventore Perferendis porro.</p>
                                    <a href="javascript:void(0)" className="small text-muted">Go To The Article</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 mb-4">
                                <img src="src\assets\imgs\blog-2.jpg" alt="" className="card-img-top w-100" />
                                <div className="card-body">
                                    <h6 className="card-title"> Harum Quae Porro</h6>
                                    <p>Fuga quae ratione inventore Perferendis porro.</p>
                                    <a href="javascript:void(0)" className="small text-muted">Go To The Article</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 mb-4">
                                <img src="src\assets\imgs\blog-3.jpg" alt="" className="card-img-top w-100" />
                                <div className="card-body">
                                    <h6 className="card-title">Qui optio neque alias</h6>
                                    <p>Fuga quae ratione inventore Perferendis porro.</p>
                                    <a href="javascript:void(0)" className="small text-muted">Go To The Article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs