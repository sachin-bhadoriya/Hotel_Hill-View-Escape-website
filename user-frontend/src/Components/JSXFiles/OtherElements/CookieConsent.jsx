import React, { useState, useEffect } from 'react';
import '../../CSSFile/CookieConsent.css'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='cookie-banner'>
      <p className='cookie-banner-text'>
        This website uses cookies to enhance your experience. Do you accept?
      </p>
      <div>
        <button className='cookie-banner-accept' onClick={handleAccept}>Accept</button>
        <button className='cookie-banner-reject' onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default CookieConsent;
