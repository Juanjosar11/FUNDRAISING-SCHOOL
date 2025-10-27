import React from 'react';

const VenueDetails: React.FC = () => {
  const venueFeatures = [
    {
      title: 'Main Auditorium',
      capacity: '1,200 seats',
      description: 'State-of-the-art auditorium with premium sound and lighting systems',
      icon: '🎭'
    },
    {
      title: 'Exhibition Hall',
      capacity: '500+ booths',
      description: 'Spacious exhibition area for sponsors and tech demonstrations',
      icon: '🏢'
    },
    {
      title: 'Networking Lounge',
      capacity: '300 people',
      description: 'Comfortable space for networking and informal discussions',
      icon: '☕'
    },
    {
      title: 'Workshop Rooms',
      capacity: '50 people each',
      description: 'Multiple breakout rooms for hands-on sessions and workshops',
      icon: '💻'
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Venue details</h4>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight">
            World-class facilities for{' '}
            <span className="text-gray-400">an unforgettable experience</span>
          </h2>
        </div>

        {/* Venue Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Innovation Convention Center
            </h3>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Located in the heart of Tech City, the Innovation Convention Center is a 
                premier venue designed specifically for technology conferences and events.
              </p>
              <p>
                The center features cutting-edge technology infrastructure, sustainable 
                design elements, and flexible spaces that can accommodate everything from 
                intimate workshops to large-scale presentations.
              </p>
              <p>
                With its modern architecture and strategic location, the venue provides 
                the perfect backdrop for networking, learning, and innovation.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Address</h4>
              <p className="text-gray-600">
                123 Innovation Boulevard<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h4 className="text-2xl font-semibold mb-6">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Capacity</span>
                <span className="font-semibold">2,000+ people</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Parking Spaces</span>
                <span className="font-semibold">800 spots</span>
              </div>
              <div className="flex justify-between items-center">
                <span>WiFi Speed</span>
                <span className="font-semibold">1 Gbps</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Accessibility</span>
                <span className="font-semibold">ADA Compliant</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Catering</span>
                <span className="font-semibold">Full Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venueFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {feature.capacity}
              </p>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;