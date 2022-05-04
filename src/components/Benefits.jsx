import React from 'react'

const Benefits = () => {
  return (
      <section id="one" className="px-2 pt-16 md:pt-0">
          <div className="container mx-auto w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="text-center w-10/12 mx-auto">
                      <img className="mx-auto" src="/images/icon-access-anywhere.svg" alt="access-anywhere" />
                      <h3 className="font-bold mt-4">Access your files, anywhere</h3>
                      <p className="mt-1">
                          The ability to use a smartphone, tablet, or computer to access your account means your files
                          follow you everywhere.
                      </p>
                  </div>
                  <div className="text-center w-11/12 mx-auto">
                      <img
                          className="mx-auto"
                          src="images/icon-security.svg"
                          style={{ height: "78px", width: "auto"}}
                          alt="security"
                      />
                      <h3 className="font-bold mt-4">Security you can trust</h3>
                      <p className="px-2 mt-1">
                          2-factor authentication and user-controlled encryption are just a couple of the security
                          features we allow to help secure your files.
                      </p>
                  </div>
                  <div className="text-center w-10/12 mx-auto">
                      <img className="mx-auto" src="/images/icon-collaboration.svg" alt="collaboration" />
                      <h3 className="font-bold mt-4">Real-time collaboration</h3>
                      <p className="mt-1">
                          Securely share files and folders with friends, family and colleagues for live collaboration. No
                          email attachments required.
                      </p>
                  </div>
                  <div className="text-center w-10/12 mx-auto">
                      <img className="mx-auto" src="/images/icon-any-file.svg" alt="any-file" />
                      <h3 className="font-bold mt-4">Store any type of file</h3>
                      <p className="mt-1">
                          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                          file types to be securely stored and shared.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Benefits