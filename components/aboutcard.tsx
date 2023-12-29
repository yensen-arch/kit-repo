
import React, { useEffect, useState } from 'react';
import '../styles/aboutcard.css';

const Home: React.FC = () => {
  const [aboutUsText, setAboutUsText] = useState<string>('');

  useEffect(() => {
    // Retrieve and update content on page load
    const storedAboutUsText = localStorage.getItem('aboutUsText');
    setAboutUsText(storedAboutUsText || '');
  }, []);

  const updateAboutUsContent = (updatedText: string) => {
    setAboutUsText(updatedText);
  };

  return (
    <div className="card">
      <div id="aboutUsSection">
        <h2>ABOUT</h2>
        <p id="aboutUsText">{aboutUsText}</p>
      </div>
    </div>
  );
};

export default Home;
