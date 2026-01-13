import { Award, Mail, Phone } from 'lucide-react'

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15 years',
      education: 'MD, Harvard Medical School',
      image: '/api/placeholder/300/400',
      bio: 'Leading cardiologist with expertise in interventional cardiology and heart failure management.',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12 years',
      education: 'MD, Johns Hopkins University',
      image: '/api/placeholder/300/400',
      bio: 'Specialized in stroke treatment and neurological disorders with extensive research background.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Orthopedic Surgeon',
      experience: '18 years',
      education: 'MD, Mayo Clinic',
      image: '/api/placeholder/300/400',
      bio: 'Expert in joint replacement and sports medicine with thousands of successful surgeries.',
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Oncologist',
      experience: '20 years',
      education: 'MD, Stanford University',
      image: '/api/placeholder/300/400',
      bio: 'Renowned oncologist specializing in personalized cancer treatment and immunotherapy.',
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Pediatrician',
      experience: '14 years',
      education: 'MD, Boston Children\'s Hospital',
      image: '/api/placeholder/300/400',
      bio: 'Dedicated pediatrician with expertise in child development and preventive care.',
    },
    {
      name: 'Dr. Robert Taylor',
      specialty: 'Emergency Medicine',
      experience: '16 years',
      education: 'MD, University of Pennsylvania',
      image: '/api/placeholder/300/400',
      bio: 'Experienced emergency physician with expertise in trauma care and critical care medicine.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Doctors</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Award className="w-16 h-16 text-primary-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{doctor.bio}</p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p><strong>Experience:</strong> {doctor.experience}</p>
                    <p><strong>Education:</strong> {doctor.education}</p>
                  </div>
                  <div className="flex gap-4 pt-4 border-t">
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                      <Phone className="w-4 h-4" />
                      Contact
                    </button>
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book an appointment with one of our expert doctors
          </p>
          <a
            href="/appointments"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  )
}

