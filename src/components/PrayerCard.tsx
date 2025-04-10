
import React from 'react';

type PrayerTranslation = {
  text: string;
  pronunciation: string;
};

type PrayerCardProps = {
  title: string;
  english: string[];
  latin: PrayerTranslation[];
  tagalog: PrayerTranslation[];
};

const PrayerCard = ({ title, english, latin, tagalog }: PrayerCardProps) => {
  return (
    <div className="prayer-card">
      <h2 className="prayer-title">{title}</h2>
      
      {/* English Version */}
      <div className="prayer-section">
        <h3 className="language-label">English</h3>
        <div className="space-y-2">
          {english.map((line, index) => (
            <p key={`en-${index}`} className="text-gray-800">{line}</p>
          ))}
        </div>
      </div>
      
      {/* Latin Version */}
      <div className="prayer-section">
        <h3 className="language-label">Latin</h3>
        <div className="space-y-2">
          {latin.map((line, index) => (
            <div key={`la-${index}`}>
              <p className="text-gray-800">{line.text}</p>
              <p className="pronunciation">{line.pronunciation}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tagalog Version */}
      <div className="prayer-section">
        <h3 className="language-label">Tagalog</h3>
        <div className="space-y-2">
          {tagalog.map((line, index) => (
            <div key={`tl-${index}`}>
              <p className="text-gray-800">{line.text}</p>
              <p className="pronunciation">{line.pronunciation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
