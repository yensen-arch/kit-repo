
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';



const AdminDashboard: React.FC = () => {
  const [updateTextArea, setUpdateTextArea] = useState<string>('');

  useEffect(() => {
    // Fetch initial aboutUsText from localStorage
    const storedAboutUsText = localStorage.getItem('aboutUsText');
    setUpdateTextArea(storedAboutUsText || '');
  }, []);

  const handleUpdateAbout = () => {
    // Save the updated text to local storage
    localStorage.setItem('aboutUsText', updateTextArea);
  };

  return (
    <div className="card">
      <div className="dashboard">
        <h2>ABOUT</h2>
        {/* <textarea
          value={updateTextArea}
          onChange={(e) => setUpdateTextArea(e.target.value)}
          rows={4}
          placeholder="Enter text to update About...."
        ></textarea> */}
        <button onClick={handleUpdateAbout}>UPDATE ABOUT</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
