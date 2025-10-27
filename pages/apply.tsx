import React from 'react';
import Layout from '../components/Layout';
import ApplyHero from '../components/ApplyHero';
import ApplicationForm from '../components/ApplicationForm';

const ApplyPage: React.FC = () => {
  return (
    <Layout title="Apply - Fundraising School">
      <ApplyHero />
      <ApplicationForm />
    </Layout>
  );
};

export default ApplyPage;