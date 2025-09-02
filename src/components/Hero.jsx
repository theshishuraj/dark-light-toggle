import React from "react";

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl-gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                  NEW
                </span>
                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border-neutral-800/50">
                  <i className="bx bx-trending-up mr-1"></i> Next Generation
                  Design System
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-netural-900 dark:text-white">
                <span className="block mb-1">Design </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                  Without Limits
                </span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Elevate your web projects with our streamlined design system
                powered by the latest Tailwind CSS v4. Create stunning user
                experiences with state-of-the-art theme switching.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                  Transition seamlessly
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group">
                <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>Start Coding</span>
              </button>
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border:neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group">
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
                <span>Documentation</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                />
                <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-900 dark:bg-amber-500 text-white dark:text-neutral-900 text-xs font-medium">
                  +5k
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star-half text-amber-500 mr-1"></i>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1">
                    4.8/5
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm ">
                  Trusted by{" "}
                  <span className="font-blod text-neutral-900 dark:text-white">
                    5,000+
                  </span>{" "}
                  developers worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-netural-400">
                    dark-mode.jsx
                  </div>
                </div>
                <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                  <img
                    src="/images/code-light.png"
                    alt="code snippet for light mode"
                    className="w-full h-full object-cover object-left-top dark:hidden"
                  />
                  <img
                    src="/images/code-dark.png"
                    alt="code snippet for dark mode"
                    className="w-full h-full object-cover object-left-top dark:block"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 lg:w-14 lh:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse">
                      <i className="bx bx-brightness-half text-xl lg:text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium flex items-center">
                      <i className="bx bxl-tailwind-css mr-1"></i>
                      Tailwind v4
                    </span>
                    <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium flex items-center">
                      <i className="bx bxl-react mr-1"></i>
                      React
                    </span>
                  </div>
                  <button className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition">
                    <i className=" bx bx-copy text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 lg:bottom-10 lg:left-10 animate-bounce">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xm lg:text-sm flex items-center shadow-lg">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i>
          Responsive
        </div>
      </div>
      <div className="hidden md:block absolute top-16 right-[15%] lg:top-20 lg:right-[20%] animate-bounce delay-300">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xm lg:text-sm flex items-center shadow-lg">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i>
          Accessible
        </div>
      </div>
    </div>
  );
};

export default Hero;
