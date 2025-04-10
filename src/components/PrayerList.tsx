import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

type PrayerInfo = {
  id: string;
  title: string;
  latinTitle: string;
  tagalogTitle: string;
  shortDescription: string;
};

const prayers: PrayerInfo[] = [
  {
    id: "sign-of-the-cross",
    title: "Sign of the Cross",
    latinTitle: "Signum Crucis",
    tagalogTitle: "Ang Pag-aantanda ng Krus",
    shortDescription: "The Sign of the Cross is a ritual gesture that marks the beginning and end of Catholic prayers."
  },
  {
    id: "our-father",
    title: "Our Father",
    latinTitle: "Pater Noster",
    tagalogTitle: "Ama Namin",
    shortDescription: "The Our Father is the Lord's Prayer taught by Jesus to his disciples."
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    latinTitle: "Ave Maria",
    tagalogTitle: "Aba Ginoong Maria",
    shortDescription: "The Hail Mary is a traditional Catholic prayer seeking the intercession of the Blessed Virgin Mary."
  },
  {
    id: "glory-be",
    title: "Glory Be",
    latinTitle: "Gloria Patri",
    tagalogTitle: "Luwalhati sa Ama",
    shortDescription: "The Glory Be is a doxology, a short hymn of praise to God."
  },
  {
    id: "fatima-prayer",
    title: "Fatima Prayer",
    latinTitle: "Oratio Fatimae",
    tagalogTitle: "Panalangin ng Fatima",
    shortDescription: "The Fatima Prayer was revealed by Our Lady of Fatima and is recited in the Rosary."
  },
  {
    id: "hail-holy-queen",
    title: "Hail Holy Queen",
    latinTitle: "Salve Regina",
    tagalogTitle: "Aba Reyna",
    shortDescription: "The Hail Holy Queen is a Marian antiphon prayed at the end of the Rosary."
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
    latinTitle: "Symbolum Apostolorum",
    tagalogTitle: "Kredo ng mga Apostol",
    shortDescription: "The Apostles' Creed is a statement of Christian belief."
  },
  {
    id: "guardian-angel-prayer",
    title: "Guardian Angel Prayer",
    latinTitle: "Oratio ad Angelum Custodem",
    tagalogTitle: "Panalangin sa Anghel na Tagapagbantay",
    shortDescription: "The Guardian Angel Prayer is a prayer asking for guidance and protection from one's guardian angel."
  },
  {
    id: "grace-before-meals",
    title: "Grace Before Meals",
    latinTitle: "Benedictio Mensae",
    tagalogTitle: "Panalangin Bago Kumain",
    shortDescription: "The Grace Before Meals is a prayer of blessing and gratitude to God before eating a meal."
  },
  {
    id: "grace-after-meals",
    title: "Grace After Meals",
    latinTitle: "Gratiarum Actio Post Cibum",
    tagalogTitle: "Panalangin Pagkatapos Kumain",
    shortDescription: "The Grace After Meals is a prayer of thanks to God for the food received and for the souls of the faithful departed."
  }
];

const PrayerList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPrayers = prayers.filter(prayer => 
    prayer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prayer.latinTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prayer.tagalogTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prayer.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Catholic Prayers</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search prayers..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrayers.map((prayer) => (
          <Link 
            key={prayer.id} 
            to={`/prayers/${prayer.id}`} 
            className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-deep-blue">{prayer.title}</h2>
              <div className="flex flex-col space-y-1 mb-2">
                <span className="text-sm text-gray-500 italic">Latin: {prayer.latinTitle}</span>
                <span className="text-sm text-gray-500 italic">Tagalog: {prayer.tagalogTitle}</span>
              </div>
              <p className="text-gray-600 text-sm">{prayer.shortDescription}</p>
              <div className="mt-4 text-gold font-medium text-sm">View Prayer →</div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPrayers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No prayers found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default PrayerList;