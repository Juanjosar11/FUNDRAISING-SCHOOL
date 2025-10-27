import React from 'react';
import Layout from '../components/Layout';
import VenueHero from '../components/VenueHero';
import VenueDetails from '../components/VenueDetails';
import VenueMap from '../components/VenueMap';

const VenuePage: React.FC = () => {
  return (
    <Layout title="Venue - Eventis">
      <VenueHero />
      <VenueDetails />
      <VenueMap />
    </Layout>
  );
};

export default VenuePage;