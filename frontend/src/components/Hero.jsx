import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center py-12">
      <div className="w-full">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] leading-tight font-extrabold tracking-tight company-font company-hero">COSSACK AUTO</h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-600">AUTO REPAIR &amp; SERVICE</p>

          <div className="mx-auto mt-6 w-20 h-1 bg-cossackred rounded" />

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">Honest work. Fair prices. Neighborhood service since day one.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservation" className="btn-primary hero-equal w-full sm:w-auto px-8 py-3 text-base font-semibold text-center">BOOK NOW</Link>
            <Link to="/services" className="bg-charcoal text-offwhite hero-cta hero-equal w-full sm:w-auto px-8 py-3 text-base font-semibold shadow text-center">SERVICES</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
