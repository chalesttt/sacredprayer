
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrayerCard from '../components/PrayerCard';
import { getPrayerById, Prayer } from '../data/prayers';

const PrayerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [prayer, setPrayer] = useState<Prayer | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      const foundPrayer = getPrayerById(id);
      if (foundPrayer) {
        setPrayer(foundPrayer);
      } else {
        setNotFound(true);
      }
    }
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-deep-blue mb-4">Prayer Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the prayer you're looking for.
            </p>
            <Link 
              to="/prayers"
              className="inline-block bg-deep-blue text-white px-6 py-2 rounded-md hover:bg-deep-blue/90 transition-colors"
            >
              View All Prayers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!prayer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-t-gold border-r-gold border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading prayer...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/prayers"
            className="inline-flex items-center text-deep-blue hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Prayers
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <PrayerCard 
            title={prayer.title}
            english={prayer.english}
            latin={prayer.latin}
            tagalog={prayer.tagalog}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrayerDetail;
