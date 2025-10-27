import React from 'react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      title: 'Email',
      value: 'hello@fundraisingschool.com',
      description: 'We respond within 24 hours',
      icon: '📧'
    },
    {
      title: 'YouTube',
      value: '@FundraisingSchool-SeriesA',
      description: 'Watch free content and tutorials',
      icon: '📺'
    },
    {
      title: 'Part of 30x.org',
      value: '30x.org',
      description: 'Learn more about our parent organization',
      icon: '🌐'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Contact information</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Multiple ways to{' '}
            <span className="text-gray-400">reach us</span>
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-6">{contact.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {contact.title}
              </h3>
              <p className="text-lg font-medium text-blue-600 mb-3">
                {contact.value}
              </p>
              <p className="text-gray-600">
                {contact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Live Session Times
            </h3>
            <div className="space-y-2 text-gray-600">
              <p><strong>Tuesdays & Thursdays:</strong> 6:00 PM Colombian Time</p>
              <p><strong>Saturdays:</strong> 1:00 PM Colombian Time</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              All sessions are recorded for lifetime access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;