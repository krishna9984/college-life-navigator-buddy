
import React, { useEffect, useState } from 'react';
import { quotes } from '@/data/collegeData';

const QuoteBanner = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  
  useEffect(() => {
    // Rotate quotes every 10 seconds
    const interval = setInterval(() => {
      const currentIndex = quotes.findIndex(q => q.text === currentQuote.text);
      const nextIndex = (currentIndex + 1) % quotes.length;
      setCurrentQuote(quotes[nextIndex]);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [currentQuote]);

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-6 rounded-lg shadow-md">
      <blockquote className="text-center">
        <p className="text-xl md:text-2xl font-display mb-2 leading-relaxed">"{currentQuote.text}"</p>
        <footer className="text-sm opacity-80">— {currentQuote.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteBanner;
