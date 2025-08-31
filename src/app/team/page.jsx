import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
  const leadership = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/images/CEO.jpg",
      bio: "John leads the company with a vision for sustainable and innovative infrastructure.",
    },
    {
      name: "Jane Smith",
      role: "Chief Engineer",
      image: "/images/images.jpeg",
      bio: "Jane drives technical excellence and project delivery with precision.",
    },
  ];

  const technicalTeam = [
    {
      name: "Mark Wilson",
      role: "Architect",
      image: "/images/architect.jpg",
      bio: "Mark designs modern, efficient, and climate-smart structures.",
    },
    {
      name: "Emily Johnson",
      role: "Project Manager",
      image: "/images/manager.jpg",
      bio: "Emily ensures projects run smoothly and meet client expectations.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-24 px-6 md:px-20 bg-gray-50 min-h-screen">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our people are our strength. We are a diverse team driven by innovation, collaboration, and a shared vision for sustainable infrastructure.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Company Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-58 h-58 mb-6">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-teal-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Technical Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {technicalTeam.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-58 h-58 mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-teal-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
