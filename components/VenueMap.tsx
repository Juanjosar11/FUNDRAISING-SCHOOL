import React from 'react';
import Button from './Button';

const VenueMap: React.FC = () => {
  const transportOptions = [
    {
      type: 'Metro',
      details: 'Tech City Station - 5 min walk',
      icon: '🚇'
    },
    {
      type: 'Bus',
      details: 'Routes 15, 23, 42 - Innovation Stop',
      icon: '🚌'
    },
    {
      type: 'Taxi/Rideshare',
      details: 'Uber, Lyft pickup zone available',
      icon: '🚗'
    },
    {
      type: 'Airport',
      details: 'Tech City Airport - 25 min drive',
      icon: '✈️'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Location & directions</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Easy to find,{' '}
            <span className="text-gray-400">easy to reach</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 mb-6">
                  Detailed map with directions and nearby landmarks
                </p>
                <Button variant="primary" href="https://maps.google.com" target="_blank">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              How to Get There
            </h3>
            
            <div className="space-y-6 mb-8">
              {transportOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl">{option.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {option.type}
                    </h4>
                    <p className="text-gray-600">{option.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Parking Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                🅿️ Parking Information
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Free parking</strong> available for all attendees</p>
                <p><strong>800 spaces</strong> in the main parking structure</p>
                <p><strong>Valet service</strong> available for VIP ticket holders</p>
                <p><strong>EV charging stations</strong> available on Level 2</p>
              </div>
            </div>

            {/* Nearby Hotels */}
            <div className="mt-8 bg-white rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                🏨 Nearby Hotels
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Tech City Grand Hotel</span>
                  <span className="text-blue-600">0.2 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Innovation Suites</span>
                  <span className="text-blue-600">0.4 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Business Center Inn</span>
                  <span className="text-blue-600">0.6 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;