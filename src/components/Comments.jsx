import React from 'react'

const Comments = () => {
  return (
      <section id="three" className="mt-32 px-4 w-11/12 mx-auto mb-64">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="bg_card px-7 pb-7 pt-10 rounded koma">
                      <p>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                          team has become a well-oiled collaboration machine.
                      </p>
                      <br />
                      <div className="flex items-center">
                          <img className="rounded-full" src="/images/profile-1.jpg" alt="profile-1" />
                          <div className="pl-2">
                              <p className="font-bold text-sm">Satish Patel</p>
                              <p className="text-xs">Founder & CEO, Huddle</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg_card px-7 pb-7 pt-10 rounded">
                      <p>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                          team has become a well-oiled collaboration machine.
                      </p>
                      <br />
                      <div className="flex items-center">
                          <img className="rounded-full" src="/images/profile-2.jpg" alt="profile-2" />
                          <div className="pl-2">
                              <p className="font-bold text-sm">Bruce McKenzie</p>
                              <p className="text-xs">Founder & CEO, Huddle</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg_card px-7 pb-7 pt-10 rounded">
                      <p>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                          team has become a well-oiled collaboration machine.
                      </p>
                      <br />
                      <div className="flex items-center">
                          <img className="rounded-full" src="/images/profile-3.jpg" alt="profile-3" />
                          <div className="pl-2">
                              <p className="font-bold text-sm">Iva Boyd</p>
                              <p className="text-xs">Founder & CEO, Huddle</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Comments