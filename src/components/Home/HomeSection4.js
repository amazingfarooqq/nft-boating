import React from 'react';
import "./home.css";

export const HomeSection4 = () => {
  return (
    <div >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="email" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="phone" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="location" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="message" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="btn btn-danger mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right" /></span></button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-image" style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)'}}>
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                      <p className="text-white op-7">601 Sherwood Ave.
                        <br /> San Bernandino</p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                      <p className="text-white op-7">251 546 9442
                        <br /> 630 446 8851</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
