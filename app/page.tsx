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
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              World-class multi-specialty healthcare with compassion and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center"
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

