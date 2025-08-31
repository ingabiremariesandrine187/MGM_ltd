import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function Home() {
  const services = [
    {
      title: "Architectural & Engineering Design",
      description: "Modern, efficient, and climate-smart designs tailored to client needs."
    },
    {
      title: "Infrastructure Construction & Development",
      description: "Building roads, bridges, drainage systems, and community facilities."
    },
    {
      title: "Technical Consultancy & Project Management",
      description: "Guiding projects from design to delivery with precision and efficiency."
    },
  ];

  const projects = [
    { title: "20 km Feeder Road Rehabilitation", description: "Gakenke District, Rwanda" },
    { title: "Bridge Design & Construction Supervision", description: "East Africa" },
    { title: "Urban Drainage Systems Development", description: "Multiple locations" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
<section
  className="relative text-center text-white py-32 md:py-40 min-h-screen flex flex-col justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/engineers.jpg')" }}
>
  {/* Overlay (lighter so background shows) */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Innovating today for the{" "}
      <span className="text-orange-400">resilient infrastructure</span>{" "}
      of tomorrow.
    </h1>

    <p className="mb-8 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
      MGM Multipurpose Ltd is a private construction company based in Rwanda, 
      serving East Africa with innovative, sustainable, and affordable 
      infrastructure solutions.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 text-lg">
        Explore Our Services
        <ArrowRightIcon className="w-5 h-5" />
      </button>
      <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 font-semibold text-lg">
        Contact Us
      </button>
    </div>
  </div>
</section>




      {/* Services */}
   <section id="services" className="py-20 px-10 bg-gray-50">
  {/* Section Title */}
  <div className="text-center mb-12 max-w-2xl mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Our <span className="text-blue-600">Services</span>
    </h2>
    <p className="mt-4 text-gray-600">
      Comprehensive infrastructure solutions designed to meet the unique challenges of East African development
    </p>

  </div>

  {/* Services Cards */}
  <div className="grid md:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        description={service.description}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-l-4 border-blue-600"
      />
    ))}
  </div>

  {/* Call to Action */}
  <div className="mt-20 bg-blue-50 rounded-xl py-12 text-center">
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
      Ready to Start Your Project?
    </h3>
    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
      Our team of experienced professionals is ready to bring your infrastructure vision to life with innovative, sustainable solutions.
    </p>
    <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
      Get Started Today &rarr;
    </button>
  </div>
</section>



      {/* Projects */}
       <section id="projects" className="py-20 px-10 bg-gray-50">
  <div className="text-center mb-12 max-w-2xl mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Our <span className="text-blue-600">Projects</span>
    </h2>
    <p className="mt-4 text-gray-600">
      Showcasing our commitment to excellence through completed and ongoing infrastructure projects across East Africa
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${project.status === 'Completed' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
            {project.status}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
}
