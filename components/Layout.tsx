import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Fundraising School', className = '' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Master the art of fundraising with top 1% founders in a 3-week intensive program." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen bg-black text-white ${className}`}>
        <Navigation />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;