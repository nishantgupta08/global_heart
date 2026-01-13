import { Heart, Brain, Bone, Pill, Baby, Clock, Eye, Wind } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <Heart className="w-8 h-8" />,
      description: 'Comprehensive heart and cardiovascular care including diagnostics, treatment, and preventive care.',
      features: [
        'Cardiac Catheterization',
        'Echocardiography',
        'Cardiac Rehabilitation',
        'Heart Surgery',
        'Preventive Cardiology',
      ],
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: <Brain className="w-8 h-8" />,
      description: 'Expert diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system.',
      features: [
        'Stroke Treatment',
        'Epilepsy Management',
        'Neurological Surgery',
        'Neuroimaging',
        'Movement Disorders',
      ],
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: <Bone className="w-8 h-8" />,
      description: 'Specialized care for bones, joints, muscles, ligaments, and tendons.',
      features: [
        'Joint Replacement',
        'Sports Medicine',
        'Spine Surgery',
        'Fracture Care',
        'Arthroscopy',
      ],
    },
    {
      id: 'oncology',
      name: 'Oncology',
      icon: <Pill className="w-8 h-8" />,
      description: 'Comprehensive cancer care including diagnosis, treatment, and supportive care.',
      features: [
        'Chemotherapy',
        'Radiation Therapy',
        'Surgical Oncology',
        'Immunotherapy',
        'Cancer Screening',
      ],
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: <Baby className="w-8 h-8" />,
      description: 'Specialized medical care for infants, children, and adolescents.',
      features: [
        'Well-Child Care',
        'Pediatric Surgery',
        'Neonatal Care',
        'Child Development',
        'Vaccinations',
      ],
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      icon: <Clock className="w-8 h-8" />,
      description: '24/7 emergency care for acute illnesses and injuries.',
      features: [
        'Trauma Care',
        'Critical Care',
        'Emergency Surgery',
        'Rapid Diagnostics',
        'Ambulance Services',
      ],
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      icon: <Eye className="w-8 h-8" />,
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: [
        'Cataract Surgery',
        'Retina Care',
        'Glaucoma Treatment',
        'LASIK Surgery',
        'Pediatric Ophthalmology',
      ],
    },
    {
      id: 'pulmonology',
      name: 'Pulmonology',
      icon: <Wind className="w-8 h-8" />,
      description: 'Expert care for respiratory and lung conditions.',
      features: [
        'Asthma Management',
        'COPD Treatment',
        'Sleep Medicine',
        'Lung Cancer Care',
        'Pulmonary Rehabilitation',
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Comprehensive healthcare services across multiple specialties
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-primary-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-primary-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to learn more about our services or schedule a consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/appointments"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

