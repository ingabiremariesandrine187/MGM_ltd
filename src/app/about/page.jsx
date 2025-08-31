// For Next.js 13+ App Router: app/about/page.js
// For Next.js 12 Pages Router: pages/about.js

import { EyeIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function About() {
  return (

    <main className="min-h-screen bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MGM Multipurpose Ltd
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A private construction company headquartered in Rwanda and operating across the
            East African region.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <EyeIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver safe, sustainable, and climate-resilient infrastructure that improves lives, strengthens
                communities, and promotes long-term development across East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Specialize In Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            We Specialize In
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Architectural & Engineering Design */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full relative">
                    <div className="absolute inset-1 border border-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Architectural & Engineering Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Modern, efficient, and climate-smart designs tailored to client needs
              </p>
            </div>

            {/* Infrastructure Construction & Development */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure Construction & Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building roads, bridges, drainage systems, and community facilities
              </p>
            </div>

            {/* Technical Consultancy & Project Management */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technical Consultancy & Project Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Guiding projects from design to delivery with precision and efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At MGM, we combine innovation, technical expertise, and local knowledge to create infrastructure that is not
            only cost-effective but also future-ready. We believe in building lasting partnerships and delivering excellence in
            every project.
          </p>
        </div>
      </section>
      <Footer/>
    </main>
  );
}