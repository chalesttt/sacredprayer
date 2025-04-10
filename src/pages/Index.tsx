
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-soft-blue/30 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-deep-blue">
              Learn and Pray in Multiple Languages
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
              Explore Catholic prayers in English, Latin, and Tagalog with pronunciation guides
            </p>
            <Link 
              to="/prayers"
              className="inline-block bg-deep-blue text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-deep-blue/90 transition-colors"
            >
              Explore Prayers
            </Link>
          </div>
        </section>
        
        {/* Featured Prayers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-deep-blue">Featured Prayers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sign of the Cross */}
              <div className="bg-light-beige rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-deep-blue">Sign of the Cross</h3>
                <p className="text-gray-700 mb-4">The Sign of the Cross marks the beginning and end of our prayers.</p>
                <Link 
                  to="/prayers/sign-of-the-cross"
                  className="text-gold font-medium hover:underline inline-flex items-center"
                >
                  View Prayer
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Our Father */}
              <div className="bg-light-beige rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-deep-blue">Our Father</h3>
                <p className="text-gray-700 mb-4">The Lord's Prayer, taught by Jesus to his disciples.</p>
                <Link 
                  to="/prayers/our-father"
                  className="text-gold font-medium hover:underline inline-flex items-center"
                >
                  View Prayer
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Hail Mary */}
              <div className="bg-light-beige rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-deep-blue">Hail Mary</h3>
                <p className="text-gray-700 mb-4">A prayer seeking the intercession of the Blessed Virgin Mary.</p>
                <Link 
                  to="/prayers/hail-mary"
                  className="text-gold font-medium hover:underline inline-flex items-center"
                >
                  View Prayer
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/prayers"
                className="inline-block bg-transparent border border-deep-blue text-deep-blue px-6 py-2 rounded-md hover:bg-deep-blue hover:text-white transition-colors"
              >
                View All Prayers
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-soft-blue/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-deep-blue">About This Collection</h2>
              <p className="text-lg text-gray-700 mb-4">
                This collection of Catholic prayers offers translations in English, Latin, and Tagalog, making it accessible to a wider audience. Each prayer includes pronunciation guides to help you pray correctly in these languages.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're learning to pray in a new language or deepening your spiritual practice, these translations will assist you in your journey of faith.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
