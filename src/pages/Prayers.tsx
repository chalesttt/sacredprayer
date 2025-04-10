
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrayerList from '../components/PrayerList';

const Prayers = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow py-8">
        <PrayerList />
      </main>
      
      <Footer />
    </div>
  );
};

export default Prayers;
