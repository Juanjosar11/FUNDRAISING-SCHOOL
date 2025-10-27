import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AgendaHero from '../components/AgendaHero';
import AgendaSchedule from '../components/AgendaSchedule';
import TicketPricing from '../components/TicketPricing';

const AgendaPage: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <AgendaHero />
      <AgendaSchedule />
      <TicketPricing />
      <Footer />
    </Layout>
  );
};

export default AgendaPage;