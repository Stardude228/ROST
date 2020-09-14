import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import client1 from '../assets/images/oomat.jpeg'
import client2 from '../assets/images/oomat.jpeg'

function Creators() {
    return (
        <div id="creators">
            <div style={{ marginTop: "50px" }} id="clients" className="offset">
                <div className="jumbotron">
                    <div className="col-12 text-center">
                        <h3 className="heading">Creators</h3>
                        <div className="heading-underline"></div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 clients">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={client1} />
                                </div>
                                <div className="col-md-8">
                                    <blockquote>
                                        <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus corrupti obcaecati repellendus error sint ab.
                                Aperiam id sunt explicabo nobis.
                                <hr className="clients-hr" />
                                        <cite>&#8212; The creator of site <br/> 0556688977</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 clients">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={client2} />
                                </div>
                                <div className="col-md-8">
                                    <blockquote>
                                        <i className="fas fa-quote-left"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus corrupti obcaecati repellendus error sint ab.
                            Aperiam id sunt explicabo nobis.
                            <hr className="clients-hr" />
                                        <cite>&#8212; The helper of creator<br/> 0556688977</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creators
