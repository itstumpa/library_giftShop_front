
"use client"
export default function AboutPage() {
  const features = [
    {
      icon: "📖",
      title: "Extensive Collection",
      description: "Browse through thousands of books, magazines, audiobooks, and digital resources spanning every genre and subject. Our collection is constantly updated to reflect the diverse interests of our community."
    },
    {
      icon: "💻",
      title: "Digital Resources",
      description: "Access e-books, online databases, research tools, and educational platforms from anywhere. Our digital library is available 24/7 for your convenience."
    },
    {
      icon: "👥",
      title: "Community Programs",
      description: "Join our book clubs, author talks, children's story times, and educational workshops. We host events that bring our community together and spark meaningful conversations."
    },
    {
      icon: "🎓",
      title: "Learning Support",
      description: "Take advantage of our study spaces, tutoring programs, and research assistance. Our knowledgeable librarians are here to help you find exactly what you need."
    },
    {
      icon: "🌐",
      title: "Free Wi-Fi & Tech",
      description: "Stay connected with free high-speed internet and access to computers, printers, and other technology resources available to all library members."
    },
    {
      icon: "♿",
      title: "Accessible Services",
      description: "Our facility is fully accessible, and we offer services for patrons with disabilities including large print books, audiobooks, and assistive technology."
    }
  ];

  const stats = [
    { value: "50,000+", label: "Books & Resources" },
    { value: "15,000+", label: "Active Members" },
    { value: "200+", label: "Events Annually" },
    { value: "50+", label: "Years Serving" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-8 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">📚 Community Library</h1>
        <p className="text-lg md:text-xl opacity-95">Your Gateway to Knowledge and Discovery</p>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="bg-white rounded-xl p-8 md:p-12 mb-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Welcome to Our Library</h2>
          <p className="text-lg text-gray-700 mb-4">
            For over 50 years, our library has been the heart of our community, providing access to information, fostering literacy, and creating spaces for learning and connection. We believe that libraries are more than repositories of books—they are vibrant community centers where curiosity thrives and knowledge is shared freely.
          </p>
          <p className="text-lg text-gray-700">
            Whether you&apos;re seeking your next great read, researching a topic, or looking for a quiet place to study, our doors are open to everyone. We're committed to promoting literacy, supporting lifelong learning, and ensuring that all members of our community have equal access to information and resources.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span className="text-4xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8 md:p-12 mb-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h4>
                <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4 text-center max-w-4xl mx-auto">
            To serve as a cornerstone of our community by providing free and equal access to information, fostering a love of reading, supporting lifelong learning, and creating inclusive spaces where everyone feels welcome.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            We envision a community where every individual has the resources and support they need to learn, grow, and achieve their full potential. Through our collections, programs, and services, we strive to inspire curiosity, promote literacy, and strengthen the bonds that unite us.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8 px-4 mt-12">
        <p className="mb-1">&copy; 2026 Community Library. All rights reserved.</p>
        <p>Opening doors to knowledge, one page at a time.</p>
      </footer>
    </div>
  );
}