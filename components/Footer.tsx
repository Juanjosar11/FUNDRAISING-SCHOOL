import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
  ];

  const footerSections = [
    {
      title: 'Program',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Speakers', href: '/speakers' },
        { label: 'Curriculum', href: '/curriculum' },
        { label: 'Pricing', href: '/curriculum#pricing' },
        { label: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Free YouTube Videos', href: 'https://youtube.com/@FundraisingSchool-SeriesA' },
        { label: 'Module 1 (Free)', href: '/curriculum#module-1' },
        { label: 'Apply for Scholarship', href: '/apply?scholarship=true' },
        { label: 'Money-Back Guarantee', href: '/faq#guarantee' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'YouTube Channel', href: 'https://youtube.com/@FundraisingSchool-SeriesA' },
        { label: '30x.org', href: 'https://30x.org' },
      ]
    }
  ];

  return (
    <footer className={`bg-black text-white relative overflow-hidden ${className}`}>
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fundraising School</h2>
          <p className="text-xl text-blue-400 mb-2">For entrepreneurs by entrepreneurs</p>
          <p className="text-gray-400">Part of 30x.org</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              <nav className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2025 Fundraising School. Part of 30x.org. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-gray-300 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;