import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="py-8 lg:py-10 px-4">
          <div className="flex flex-wrap justify-between items-center">
            <a href="/#">
              <img
                class="w-6/12 md:w-10/12"
                src="/images/logo.svg"
                alt="logo"
              />
            </a>
            <ul className="flex space-x-3 md:space-x-10 text-white">
              <li className="text-sm md:text-md">
                <a
                  href="/#"
                  className="opacity-70 hover:opacity-100 hover:underline hover:underline-offset-1"
                >
                  Features
                </a>
              </li>
              <li className="text-sm md:text-md">
                <a
                  href="/#"
                  className="opacity-70 hover:opacity-100 hover:underline hover:underline-offset-1"
                >
                  Team
                </a>
              </li>
              <li className="text-sm md:text-md">
                <a
                  href="/#"
                  className="opacity-70 hover:opacity-100 hover:underline hover:underline-offset-1"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="intro" className="px-4 md:pb-44">
          <img
            className="mx-auto px-4 md:w-6/12"
            src="/images/illustration-intro.png"
            alt="intro"
          />
          <br />
          <div className="text_intro text-center">
            <h1 className="text-2xl lg:text-4xl font-bold md:w-6/12 mx-auto">
              All your files in one secure location, accessible anywhere.
            </h1>
            <br />
            <p className="font-normal px-6 tracking-wide md:px-0 md:w-5/12 mx-auto">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button className="btn rounded-full py-3 px-20 mt-6 hover:opacity-70">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
