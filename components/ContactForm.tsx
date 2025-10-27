import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Get in touch</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Have questions about{' '}
            <span className="text-gray-400">Fundraising School?</span>
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-800 mb-3">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="px-12 py-4"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;