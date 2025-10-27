import React from 'react';
import Layout from '../components/Layout';
import CurriculumHero from '../components/CurriculumHero';
import CurriculumSchedule from '../components/CurriculumSchedule';
import CurriculumPricing from '../components/CurriculumPricing';

const CurriculumPage: React.FC = () => {
  return (
    <Layout title="Curriculum - Fundraising School">
      <CurriculumHero />
      <CurriculumSchedule />
      <CurriculumPricing />
    </Layout>
  );
};

export default CurriculumPage;