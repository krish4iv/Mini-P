import PricingSection from '../components/PricingSection'
import React from 'react'
import question from '../assets/questionmark.png'
import AccordianC from '@/components/AccordianC';
import section_3 from '../assets/section_3.png';

import { FaCheckCircle } from "react-icons/fa";
import Footer from '@/components/Footer';
const features = [
  { name: "Process Analysis", basic: true, pro: true, business: true },
  { name: "Task Management", basic: true, pro: true, business: true },
  { name: "Time Tracking", basic: true, pro: true, business: true },
  { name: "Performance Metrics", basic: true, pro: true, business: true },
  { name: "Customizable Reports", basic: true, pro: true, business: true },
  { name: "Email Integration", basic: true, pro: true, business: true },
  { name: "Real-time Collaboration", basic: true, pro: true, business: true },
  { name: "Automated Workflows", basic: true, pro: true, business: true },
  { name: "Analytics Dashboard", basic: true, pro: true, business: true },
  { name: "SLA Management", basic: true, pro: true, business: true },
]

const Pricing = () => {
  return (
    <div>
      <section className='flex flex-col  w-[1440px] mx-auto gap-y-6'>
        <PricingSection />

        <div className="py-12 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900">Compare Features</h2>
            <div className="max-w-screen-xl mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
              {["Basic", "Pro", "Business"].map((tier) => (
                <div key={tier} className="justify-between rounded-lg shadow-sm gap">
                  <div className="p-6">
                    <h3 className="text-3xl font-semibold leading-6 text-gray-900 ">{tier}</h3>
                  </div>
                  <div className="px-6 pt-6 pb-8 rounded-lg ">
                    <ul className="space-y-4">
                      {features.map((feature) => {
                        const isIncluded = feature[tier.toLowerCase()]
                        return (
                          <li key={feature.name} className="flex">
                            {isIncluded && (
                              <FaCheckCircle />
                            )}
                            <span className={`ml-3 text-base ${isIncluded ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.name}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col h-screen w-[1440px] mx-auto'>
        <div className='flex items-center justify-center'>
          <img src={question} width={200} alt="Pricing" />
        </div>
        <div className='w-4/12 mx-auto'>
          <AccordianC />
        </div>
        <section className="bg-[#ededed] py-16 flex justify-center">
          <div className="flex items-center w-full max-w-5xl p-8 bg-white rounded-lg shadow-md">
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Get started with Lando today</h2>
              <p className="mb-6 text-lg text-gray-600">Start optimizing your processes today.</p>
              <a
                href="#"
                className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500"
              >
                Sign up now
              </a>
            </div>
            <div className="flex justify-center w-full mt-8 md:w-1/2 md:mt-0">
              <img
                src={section_3}
                alt="3D Graphic"
                className="w-64 md:w-80"
              />
            </div>
          </div>
        </section>
        
      </section>

    </div>
  )
}

export default Pricing