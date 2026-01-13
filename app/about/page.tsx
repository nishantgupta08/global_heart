import { Award, Users, Heart, Target } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We treat every patient with empathy and understanding',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical care',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our practices',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Embracing latest medical technologies and treatments',
    },
  ]

  const stats = [
    { number: '500+', label: 'Expert Doctors' },
    { number: '50+', label: 'Medical Specialties' },
    { number: '100K+', label: 'Patients Treated' },
    { number: '25+', label: 'Years of Excellence' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Global Heart Hospital</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Leading the way in multi-specialty healthcare with a commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Global Heart Hospital, we are dedicated to providing world-class healthcare 
              services that combine cutting-edge medical technology with compassionate patient care. 
              Our mission is to improve the health and well-being of our community through 
              excellence in clinical practice, education, and research.
            </p>
            <p className="text-lg text-gray-700">
              We believe that every patient deserves access to the highest quality medical care, 
              delivered with respect, dignity, and understanding. Our team of experienced 
              healthcare professionals works tirelessly to ensure that each patient receives 
              personalized attention and the best possible treatment outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded over 25 years ago, Global Heart Hospital has grown from a small 
              community healthcare facility to a leading multi-specialty hospital. 
              Throughout our journey, we have remained committed to our founding principles 
              of providing exceptional patient care and advancing medical knowledge.
            </p>
            <p className="text-lg text-gray-700">
              Today, we are proud to serve thousands of patients annually with a comprehensive 
              range of medical services. Our state-of-the-art facilities, combined with our 
              team of highly skilled medical professionals, enable us to deliver outstanding 
              healthcare outcomes and maintain our reputation as a trusted healthcare provider.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

