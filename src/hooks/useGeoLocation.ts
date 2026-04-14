import { useState, useEffect } from 'react';

const CACHE_KEY = 'geo_country_code';
const CACHE_EXPIRY_KEY = 'geo_country_code_expiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const useGeoLocation = () => {
  const [isIndia, setIsIndia] = useState(true); // default to India
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);

    if (cached && expiry && Date.now() < Number(expiry)) {
      setIsIndia(cached === 'IN');
      setLoading(false);
      return;
    }

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const code = data.country_code || 'IN';
        localStorage.setItem(CACHE_KEY, code);
        localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_DURATION));
        setIsIndia(code === 'IN');
      })
      .catch(() => {
        setIsIndia(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return { isIndia, loading };
};
