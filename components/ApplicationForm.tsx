import React, { useState } from 'react';
import Button from './Button';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    applicationType: 'full',
    stage: '',
    traction: '',
    previousFundraising: '',
    motivation: '',
    commitment: false,
    scholarshipReason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-9 h-1 bg-gray-300"></div>
            <h4 className="text-lg font-medium text-black">Application</h4>
            <div className="w-9 h-1 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 max-w-4xl leading-tight mx-auto">
            Ready to master{' '}
            <span className="text-gray-400">fundraising?</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Fill out this application to secure your spot in the next cohort. We review applications on a rolling basis.
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Application Type */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Type</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="applicationType"
                  value="full"
                  checked={formData.applicationType === 'full'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Full Program ($1,450)</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="applicationType"
                  value="scholarship"
                  checked={formData.applicationType === 'scholarship'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Scholarship Application ($725)</span>
              </label>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-gray-800 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-3">
                Email Address *
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
            <label htmlFor="company" className="block text-lg font-medium text-gray-800 mb-3">
              Company/Startup Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What's your startup called?"
            />
          </div>

          {/* Startup Information */}
          <div>
            <label htmlFor="stage" className="block text-lg font-medium text-gray-800 mb-3">
              What stage is your startup? *
            </label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select stage</option>
              <option value="idea">Idea stage</option>
              <option value="mvp">MVP/Prototype</option>
              <option value="pre-seed">Pre-seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="later">Later stage</option>
            </select>
          </div>

          <div>
            <label htmlFor="traction" className="block text-lg font-medium text-gray-800 mb-3">
              Describe your current traction *
            </label>
            <textarea
              id="traction"
              name="traction"
              value={formData.traction}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Revenue, users, partnerships, etc."
            />
          </div>

          <div>
            <label htmlFor="previousFundraising" className="block text-lg font-medium text-gray-800 mb-3">
              Previous fundraising experience
            </label>
            <textarea
              id="previousFundraising"
              name="previousFundraising"
              value={formData.previousFundraising}
              onChange={handleChange}
              rows={3}
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Have you raised capital before? What challenges did you face?"
            />
          </div>

          <div>
            <label htmlFor="motivation" className="block text-lg font-medium text-gray-800 mb-3">
              Why do you want to join Fundraising School? *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="What do you hope to achieve from this program?"
            />
          </div>

          {/* Scholarship Section */}
          {formData.applicationType === 'scholarship' && (
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Scholarship Information</h3>
              <div>
                <label htmlFor="scholarshipReason" className="block text-lg font-medium text-gray-800 mb-3">
                  Why do you need a scholarship? *
                </label>
                <textarea
                  id="scholarshipReason"
                  name="scholarshipReason"
                  value={formData.scholarshipReason}
                  onChange={handleChange}
                  required={formData.applicationType === 'scholarship'}
                  rows={4}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Explain your financial situation and commitment to the program"
                />
              </div>
            </div>
          )}

          {/* Commitment */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="commitment"
                checked={formData.commitment}
                onChange={handleChange}
                required
                className="w-5 h-5 text-blue-600 mt-1"
              />
              <span className="text-gray-700">
                I commit to attending all live sessions or watching recordings, completing assignments, 
                and actively participating in the program. I understand this is an intensive 3-week program 
                that requires dedication and effort. *
              </span>
            </label>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
            >
              Submit Application
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              We'll review your application and get back to you within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;