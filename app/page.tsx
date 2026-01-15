import Link from 'next/link'
import { Heart, Users, Award, Clock, Stethoscope, Shield } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Expert Care',
      description: 'World-class medical professionals dedicated to your health',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Accredited Facility',
      description: 'Internationally recognized for excellence in healthcare',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services available',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Multi-Specialty',
      description: 'Comprehensive healthcare across all medical specialties',
    },
  ]

  const specialties = [
    {
      name: 'Cardiology',
      description: 'Advanced heart care and cardiovascular treatments',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      name: 'Neurology',
      description: 'Expert brain and nervous system care',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: 'Orthopedics',
      description: 'Bone, joint, and muscle treatments',
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: 'Oncology',
      description: 'Comprehensive cancer care and treatment',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      name: 'Pediatrics',
      description: 'Specialized care for children and infants',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      name: 'Emergency Medicine',
      description: 'Immediate care for critical conditions',
      icon: <Clock className="w-6 h-6" />,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/45 via-primary-700/40 to-primary-800/35 z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/5 lg:w-2/5 xl:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90"
              alt="Medical professionals providing healthcare"
              className="w-full h-full object-cover object-center brightness-105 contrast-105"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl md:max-w-2xl lg:max-w-xl mx-auto md:mx-0 text-center md:text-left pr-0 md:pr-8 lg:pr-12 xl:pr-16">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 md:mb-6 lg:mb-7 leading-[1.1] md:leading-[1.15] tracking-tight">
              Your Health,Our Priority
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-10 lg:mb-12 text-primary-100 max-w-xl mx-auto md:mx-0 leading-relaxed md:leading-relaxed">
              World-class multi-specialty healthcare with compassion and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start items-stretch sm:items-center">
              <Link
                href="/appointments"
                className="bg-white text-primary-600 px-7 md:px-9 lg:px-10 py-3.5 md:py-4 lg:py-5 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 text-center text-base md:text-lg leading-normal shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[180px] md:min-w-[200px]"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-7 md:px-9 lg:px-10 py-3.5 md:py-4 lg:py-5 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-center text-base md:text-lg leading-normal w-full sm:w-auto min-w-[180px] md:min-w-[200px]"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple medical specialties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Medical Attention?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our emergency department is open 24/7 to serve you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Emergency
            </Link>
            <Link
              href="/appointments"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

