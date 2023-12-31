import React from 'react'
import logo from "../../component/image/4.jpg"

const About = () => {
  return (
    <div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
            Meet our Team
          </h5>
          <p className="mb-6 text-gray-900">
          At Online Education System (OES), our solution will help you to acheive a complete AI Integrated, e-Learning management system which addresses school data analytics, stakeholder's management connection, aggregation for policy formation and student performance improvement. This can be for stakeholders such as universities, schools, students and other educational stakeholders.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img
            src={logo}
            className="mx-auto object-cover rounded-full h-30 w-30 "
            alt=""
          />
            </div>
            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
            <p className="text-sm text-gray-700">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn't even know we were calling him Big
              Bear.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img
            src={logo}
            className="mx-auto object-cover rounded-full h-30 w-30 "
            alt=""
          />
            </div>
            <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
            <p className="text-sm text-gray-700">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img
            src={logo}
            className="mx-auto object-cover rounded-full h-30 w-30 "
            alt=""
          />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
            <p className="text-sm text-gray-700">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img
            src={logo}
            className="mx-auto object-cover rounded-full h-30 w-30 "
            alt=""
          />
            </div>
            <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
            <p className="text-sm text-gray-700">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling. Inspiring, invest
              synergy capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About