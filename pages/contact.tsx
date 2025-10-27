import React from 'react';
import Layout from '../components/Layout';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact - Eventis">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;