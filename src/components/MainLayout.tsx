import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Import the updated Header
import Footer from './Footer'; // Import the updated Footer

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where the routed page component will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
