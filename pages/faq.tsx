import React from 'react';
import Layout from '../components/Layout';
import FAQHero from '../components/FAQHero';
import FAQSection from '../components/FAQSection';

const FAQPage: React.FC = () => {
  return (
    <Layout title="FAQ - Fundraising School">
      <FAQHero />
      <FAQSection />
    </Layout>
  );
};

export default FAQPage;