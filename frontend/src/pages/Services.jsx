import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'Oil Change', desc: 'Synthetic and conventional oil changes, filter replacement, fluid top-off.' },
  { title: 'Brake Service', desc: 'Brake inspection, pads/rotors replacement, brake fluid flush and diagnostics.' },
  { title: 'Tire Service', desc: 'Rotation, balancing, flat repair, new tires and TPMS service.' },
  { title: 'Battery & Electrical', desc: 'Battery testing/replacement, starter/alternator diagnosis and repair.' },
  { title: 'Engine Diagnostics', desc: 'Check engine light diagnostics, error code reading, and repair guidance.' },
  { title: 'Transmission Service', desc: 'Transmission inspection, fluid service, and minor repairs.' },
  { title: 'AC & Heating', desc: 'HVAC diagnostics, refrigerant recharge, heater core and blower repairs.' },
  { title: 'Scheduled Maintenance', desc: 'Factory-scheduled service intervals to keep your warranty and reliability.' }
]

export default function Services(){
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Services</h2>
          <div className="w-24 h-1 bg-cossackred mx-auto mb-6" />
          <p className="text-gray-600 text-lg md:text-xl">We provide a full range of maintenance and repair services — from routine oil changes to engine diagnostics and transmission work.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <article key={s.title} className="service-card bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <div className="mt-auto">
                <Link to="/reservation" state={{ prefill: s.title }} className="inline-block service-book">BOOK NOW</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
