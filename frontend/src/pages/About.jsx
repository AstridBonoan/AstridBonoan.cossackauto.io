import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-3">About Me</h2>
          <div className="w-24 h-1 bg-cossackred mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">Your trusted neighborhood auto repair shop. Honest work, fair prices, quality service.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-56 h-56 rounded-full bg-[var(--color-offwhite)] shadow-inner flex items-center justify-center text-gray-500">Self image</div>
          </div>

          <div className="md:col-span-2 md:pl-8">
            <h3 className="text-2xl font-bold">Your Name</h3>
            <div className="uppercase text-sm text-gray-500 mt-2">Owner / Founder</div>

            <div className="mt-6 text-gray-600 space-y-4">
              <p>Hi, I'm Your Name — owner of Cossack Auto. I started this shop because I believe in honest, high-quality auto repair.</p>
              <p>I treat every vehicle like my own and stand behind my work. If you'd like to schedule service, please use the button below to book an appointment.</p>
            </div>

            <div className="mt-12 md:mt-16">
              <Link to="/reservation" className="inline-block btn-primary px-6 py-2">BOOK NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
