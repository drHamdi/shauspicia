import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleTag = ({ trackingId }) => {
  const location = useLocation();

  useEffect(() => {
    // Create the dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Create the script tag for gtag.js
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script1.async = true;

    // Create the inline script to configure gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;

    // Append both scripts to the document
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Ensure gtag function is globally accessible
    window.gtag = window.gtag || function(){dataLayer.push(arguments);};

    // Track page views on route change
    window.gtag('config', trackingId, {
      'page_path': location.pathname,
    });

    // Cleanup function to remove scripts on unmount
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [location, trackingId]);

  return null;
};

export default GoogleTag;
