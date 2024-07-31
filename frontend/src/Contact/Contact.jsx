import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
  return (
    <div>
      <div><Navbar/></div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 class="section-title ff-secondary text-center custom-text-color fw-normal">Contact Us</h5>
              <h1 class="mb-5">Contact For Any Query</h1>
          </div>
          <div class="row g-4">
              <div class="col-12">
                  <div class="row gy-4">
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start custom-text-color">Booking</h5>
                          <p><i class="fa fa-envelope-open custom-text-color me-2"></i>book@example.com</p>
                      </div>
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start custom-text-color">General</h5>
                          <p><i class="fa fa-envelope-open custom-text-color me-2"></i>info@example.com</p>
                      </div>
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start custom-text-color">Technical</h5>
                          <p><i class="fa fa-envelope-open custom-text-color me-2"></i>tech@example.com</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="wow fadeInUp" data-wow-delay="0.2s">
                      <form>
                          <div class="row g-3">
                              <div class="col-md-6">
                                  <div class="form-floating">
                                      <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                      <label for="name">Your Name</label>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-floating">
                                      <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                      <label for="email">Your Email</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="form-floating">
                                      <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                      <label for="subject">Subject</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="form-floating">
                                      <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                      <label for="message">Message</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <button class="btn custom-text-color w-100 py-3" type="submit">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
        </div>
        </div>
    </div>
    </div>
)
}

export default Contact
