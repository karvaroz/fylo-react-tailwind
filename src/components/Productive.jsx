import React from 'react'

const Productive = () => {
  return (
      <section id="two" className="mt-20 px-4 w-11/12 mx-auto">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                      <img className="mx-auto" src="/images/illustration-stay-productive.png" alt="stay-productive" />
                  </div>
                  <div className="w-12/12 md:w-11/12">
                      <h1 className="text-2xl w-5/6 md:text-4xl font-bold md:w-9/12">Stay productive, wherever you are</h1>
                      <p className="mt-6">
                          Never let location be an issue when accessing your files. Fylo has you covered for all of your
                          file storage needs.
                      </p>
                      <p className="mt-4">
                          Securely share files and folders with friends, family and colleagues for live collaboration. No
                          email attachments required.
                      </p>
                      <a href="/#" className="mt-4 flex"> See how Fylo works &nbsp; </a>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Productive