import React from 'react'

const Footer = () => {
  return (
      <footer className="px-4 relative pt-72 md:pt-64 lg:pt-48">
          <section
              id="four"
              className="absolute inset-x-0 w-11/12 bg_email mx-auto p-4 md:w-4/6 md:px-8 md:py-10 rounded"
          >
              <div className="container text-center">
                  <h2 className="font-bold text-3xl">Get early access today</h2>
                  <p className="mt-4 w-10/12 mx-auto">
                      It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                      questions, our support team would be happy to help you.
                  </p>
                  <form name="form" id="form" className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-x-6">
                      <div className="col-span-2">
                          <div className="from_control">
                              <input
                                  className="w-full rounded-full h-12 px-6 py-2 outline-none"
                                  name="email"
                                  id="email"
                                  type="text"
                              />
                              <small className="text-red-700 text-left px-4 block" id="error"
                              >Please enter a valid email address</small
                              >
                          </div>
                      </div>
                      <button className="btn w-full px-6 py-2 h-12 rounded-full" type="submit">Get Started For Free</button>
                  </form>
              </div>
          </section>
          <div className="container mx-auto">
              <img className="w-36 md:w-40" src="/images/logo.svg" alt="" />
              <div className="ineline lg:flex gap-8 mt-8">
                  <div className="flex location lg:w-4/12">
                      <img src="/images/icon-location.svg" alt="" />
                      <p className="pl-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua
                      </p>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:w-3/12">
                      <div className="flex items-center">
                          <img className="phone" src="/images/icon-phone.svg" alt="phone" />
                          <p className="pl-4">+1-543-123-4567</p>
                      </div>
                      <div className="flex items-center mt-2">
                          <img className="email" src="/images/icon-email.svg" alt="email" />
                          <p className="pl-4">example@fylo.com</p>
                      </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:w-2/12">
                      <h3>About Us</h3>
                      <p>Jobs</p>
                      <p>Press</p>
                      <p>Blog</p>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:w-2/12">
                      <h3>Contact Us</h3>
                      <p>Terms</p>
                      <p>Privacy</p>
                  </div>
                  <div className="mt-6 justify-center lg:justify-end lg:mt-0 flex gap-x-2">
                      <ion-icon
                          className="w-5 h-5 p-1 border-2 rounded-full border-solid border-white"
                          name="logo-facebook"
                      ></ion-icon>
                      <ion-icon
                          className="w-5 h-5 p-1 border-2 rounded-full border-solid border-white"
                          name="logo-twitter"
                      ></ion-icon>
                      <ion-icon
                          className="w-5 h-5 p-1 border-2 rounded-full border-solid border-white"
                          name="logo-instagram"
                      ></ion-icon>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer